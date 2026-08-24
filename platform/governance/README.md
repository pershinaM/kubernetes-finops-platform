# Governance layer

This directory is intended for Kyverno policies and related validation assets.

Initial policy focus:

- required ownership labels,
- environment consistency,
- safe defaults for GitOps-managed workloads.

Governance in Local v1 should support the FinOps metadata model directly and avoid unrelated policy sprawl.

Current scaffold:

- `kyverno/base` contains repository-owned policies,
- `kyverno/local` keeps the local deployment entrypoint stable before the controller install is wired.
