# FinOps layer

This directory is intended for OpenCost resources, cost-model configuration, and supporting manifests that connect Kubernetes allocation data to product-level reporting.

Local v1 should remain focused on:

- allocation visibility,
- modeled cost,
- workload and product aggregation,
- unit economics support.

Current scaffold:

- `opencost/` for allocation and modeled-cost primitives,
- `goldilocks/` for rightsizing inputs,
- `local/` as the Argo CD entrypoint for Local v1.
