import sharedFunction from "@my-project/shared";

export default function client() {
  console.log("client is running");
  sharedFunction();
}

client();
