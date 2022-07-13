import sharedFunction from "@my-project/shared/src/index";

export default function client() {
  console.log("client is running");
  sharedFunction();
}

client();
