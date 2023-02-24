const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const homeR = require('./routers/homeR')
const port = process.env.port || 3000;
const app = express();
const path = require('path')