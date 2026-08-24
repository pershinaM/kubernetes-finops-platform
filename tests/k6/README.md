# k6 scenarios

This directory is intended for repeatable load scenarios used to measure workload behavior and compare resource efficiency before and after sizing changes.

Target outputs:

- request volume baseline,
- latency impact,
- resource usage under load,
- `Cost per 1M requests` comparisons.

Initial scenarios:

- `checkout.js` targets the `checkout` service in `prod`
- `analytics.js` targets the `analytics` service in `stage`
