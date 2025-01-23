"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
var client_1 = require("@sanity/client");
exports.client = (0, client_1.createClient)({
    projectId: 'o480wehf', // Replace with your project ID
    dataset: 'production', // Or your dataset name
    apiVersion: '2024-01-04', // Today's date or latest API version
    useCdn: false, // Disable CDN for real-time updates
    token: "skuf0I2EBPthbgYqnGOz10YOHwmk8WdPTpKW2zeTVaLW8LzReiWkuAedRT55IKMYwopqUGULZdtr6kbl8saRABXSfsDzWt4kF3pojcPQYHBqalMzsOxAqi3DvpEIbKdLjAaWN7XXrBvMwKvf0weu9hyR6AjhN6rj4RzkdUviuFKr99Bf2s3H"
});