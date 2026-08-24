# Governance layer

This directory is intended for Kyverno policies and related validation assets.

Initial policy focus:

- required ownership labels,
- environment consistency,
- safe defaults for GitOps-managed workloads.

Governance in Local v1 should support the FinOps metadata model directly and avoid unrelated policy sprawl.

Current scaffold:

- `kyverno/base` contains repository-owned policies,
- `kyverno/policies/local` is the GitOps path synced by Argo CD for Local v1,
- the Kyverno controller itself is installed by a dedicated Argo CD Application from the upstream Helm chart.
