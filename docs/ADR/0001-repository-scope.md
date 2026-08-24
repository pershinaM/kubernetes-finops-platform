# ADR 0001: Repository scope

## Status

Accepted

## Context

The repository is intended to support Kubernetes-focused FinOps analysis without turning into a generic platform repository.

## Decision

The repository will include only components that contribute directly to:

- GitOps reconciliation,
- workload ownership and governance,
- observability needed for FinOps analysis,
- cost allocation and rightsizing,
- reproducible unit-economics analysis.

## Consequences

- Components that do not strengthen that path should stay out of scope.
- The local phase remains single-cluster and intentionally narrow.
- Multi-cloud billing integrations are deferred until the AWS reconciliation path is stable.
