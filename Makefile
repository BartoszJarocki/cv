PNPM ?= pnpm
.DEFAULT_GOAL := help

.PHONY: help install dev build start og lint lint-fix format format-fix check check-fix clean

help:
	@printf '%s\n' 'Available commands:'
	@printf '%s\n' '-------------------'
	@printf '%s\n' ''
	@printf '%s\n' 'Dev & Build'
	@printf '%s\n' '-----------'
	@printf "  make %-10s # Next.js dev server\n" "dev"
	@printf "  make %-10s # Production build\n" "build"
	@printf "  make %-10s # Run prod server\n" "start"
	@printf "  make %-10s # Refresh OG assets\n" "og"
	@printf '%s\n' ''
	@printf '%s\n' 'Quality'
	@printf '%s\n' '-------'
	@printf "  make %-10s # Biome lint\n" "lint"
	@printf "  make %-10s # Biome lint --write\n" "lint-fix"
	@printf "  make %-10s # Biome format\n" "format"
	@printf "  make %-10s # Biome format --write\n" "format-fix"
	@printf "  make %-10s # Biome check\n" "check"
	@printf "  make %-10s # Biome check --write\n" "check-fix"
	@printf '%s\n' ''
	@printf '%s\n' 'Setup & Maintenance'
	@printf '%s\n' '-------------------'
	@printf "  make %-10s # Install deps\n" "install"
	@printf "  make %-10s # Purge caches/artifacts\n" "clean"

install:
	$(PNPM) install

dev: install
	$(PNPM) run dev

build: install
	$(PNPM) run build

start:
	$(PNPM) run start

og: install
	$(PNPM) run generate:og

lint: install
	$(PNPM) run lint

lint-fix: install
	$(PNPM) run lint:fix

format: install
	$(PNPM) run format

format-fix: install
	$(PNPM) run format:fix

check: install
	$(PNPM) run check

check-fix: install
	$(PNPM) run check:fix

clean:
	@rm -rf .next out node_modules
	@$(PNPM) store prune
