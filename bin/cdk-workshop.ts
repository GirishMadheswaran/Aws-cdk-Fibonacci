#!/usr/bin/env node
import "source-map-support/register";
// import * as cdk from "aws-cdk-lib";
import * as cdk from "@aws-cdk/core";
import { FargateDemoStack } from "../lib/fagate";
import { CloudfrontDemoStack } from "../lib/cloudfront";


const app = new cdk.App();


new FargateDemoStack(app, "FargateDemoStack", {
  env: { account: "937211272142", region: "us-west-1" },
});

new CloudfrontDemoStack(app, "CloudfrontDemoStack", {
  stage:"prod",
  env: { account: "937211272142", region: "us-west-1" },
});