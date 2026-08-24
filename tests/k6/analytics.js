import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 5,
  duration: "2m",
  thresholds: {
    http_req_failed: ["rate<0.01"],
    http_req_duration: ["p(95)<750"],
  },
};

export default function () {
  http.get("http://analytics.stage.svc.cluster.local/");
  sleep(1);
}
