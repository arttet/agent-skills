set dotenv-load
set dotenv-filename := ".env"

skill_dir := "skills"

# ==============================================================================
# Help
# ==============================================================================

[doc('Run the help recipe by default')]
default: help

[doc('Show available recipes and their descriptions')]
help:
    @just --list --unsorted --list-submodules

# ==============================================================================
# Development
# ==============================================================================

[doc('Install dependencies')]
[group('Development')]
install:
    @echo "✨ Installing Dependencies..."

    @echo ""
    @echo "📦 Installing EditorConfig tools..."
    bun install --global @htmlacademy/editorconfig-cli
    go install github.com/editorconfig-checker/editorconfig-checker/v3/cmd/editorconfig-checker@latest
    @echo "✅ EditorConfig tools installed"

    @echo ""
    @echo "📝 Installing Markdown and spell check tools..."
    bun install --global markdownlint-cli2
    bun install --global cspell
    @echo "✅ Markdown and spell check tools installed"

    @echo ""
    @echo "📄 Installing YAML lint tools..."
    uv tool install yamllint
    @echo "✅ YAML lint tools installed"

    @echo ""
    @echo "⚙️ Installing GitHub Actions lint tools..."
    go install github.com/rhysd/actionlint/cmd/actionlint@latest
    @echo "✅ GitHub Actions lint tools installed"

    @echo ""
    @echo "🧠 Installing skill validation tools..."
    go install github.com/agent-ecosystem/skill-validator/cmd/skill-validator@latest
    @echo "✅ Skill validation tools installed"

    @echo ""
    @echo "✍️ Syncing Vale packages..."
    vale sync
    @echo "✅ Vale packages synced"

[doc('Format code')]
[group('Development')]
fmt:
    @echo "✨ Formatting code..."
    editorconfig-cli .
    dprint fmt
    just --fmt
    @echo "✅ Code formatted!"

[doc('Lint code')]
[group('Development')]
lint:
    @echo "✨ Linting code..."
    markdownlint-cli2 "**/*.md"
    yamllint .
    actionlint -verbose
    cspell .
    vale --glob='!**/{node_modules,.vale}/**' .
    @echo "✅ Code linted!"

[doc('Check skills')]
[group('Development')]
check:
    skill-validator check --strict {{ skill_dir }}
    editorconfig-checker
    dprint check
    just --fmt --check

[doc('Validate skills')]
[group('Development')]
validate:
    @echo "🔍 Validating skills..."
    skill-validator validate structure {{ skill_dir }}
    skill-validator validate links {{ skill_dir }}
    skill-validator analyze content {{ skill_dir }}
    skill-validator analyze contamination {{ skill_dir }}
    @echo "✅ Validation complete!"

[doc('Evaluate skills')]
[group('Development')]
evaluate *args:
    @echo "🔍 Evaluating skills..."
    skill-validator score evaluate --provider claude-cli {{ skill_dir }} {{ args }}
    gh skill publish --dry-run
    @echo "✅ Evaluation complete!"

[doc('Run CI checks')]
[group('Development')]
ci: fmt lint check validate

# ==============================================================================
# Documentation
# ==============================================================================

[group: 'Documentation']
mod docs 'misc/justfiles/docs.just'
