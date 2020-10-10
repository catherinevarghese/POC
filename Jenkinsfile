#!groovy

@Library('flycatch-jenkins-shared-library') _
pipeline {
 agent {
  docker {
   image 'node:lts'
  }
 }
 stages {
  stage('Cpd') {
   steps {
    sh 'npm i jscpd'
    sh 'jscpd --ignore "/**/*.test.ts,/**/**/constants.ts,**/node_modules/**" src/ -r xml || true'
   }
  }
  stage('Lint') {
   steps {
    sh 'npm install --save-dev eslint eslint-loader babel-loader babel-eslint eslint-plugin-react eslint-config-airbnb'
    sh 'npm run --silent -- lint --format=checkstyle >checkstyle-result.xml|| true'
   }
  }
 }

 post {
  always {
    recordIssues(tool: cpd(pattern: 'jscpd-report.xml'),qualityGates: [[threshold: 1, type: 'TOTAL', unstable: true]])
    recordIssues(tool: esLint(pattern: 'checkstyle-result.xml'),qualityGates: [[threshold: 1, type: 'TOTAL', unstable: true]])
    sendNotifications(currentBuild.result, '#account-book')
  }
 }
}
