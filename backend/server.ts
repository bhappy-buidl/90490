const express = require('express');
const jwt = require('jsonwebtoken');
const { viem } = require('viem')

const app = express();
const PORT = process.env.PORT || 3000;

let nonce = {};

app