import { Worker } from "worker_threads";

const worker = new Worker("./build/worker.js", {
  workerData: {
    value: 6,
    path: "./worker.ts",
  },
});

worker.on("message", (result) => {
  console.log(result);
});
worker.on("error", (err) => {
  console.log("Error", err);
});
