//This is comment
pipeline {
  agent any
  triggers { 
      cron('H/60 * * * *') // Every four hours  = 0 */4 * * *
  }
  options {
    timeout(time: 20, unit: "MINUTES") 
  }
  stages {
    stage("Install") { 
      steps {
        sh "rm -rf node_modules/npm" 
        sh "npm install"
        sh "docker-compose run --rm cypress cversion" 
        sh "rm -rf cypress/screenshots/* cypress/videos/*"
        sh "touch cypress/screenshots/.empty"
        sh "touch cypress/videos/.empty"  
      }    
    }
    stage("Build") {
      when {
        environment name: "CHANGE_ID", value: ""
      }      
      parallel {
        stage("Test1") {
          steps {
            sh "docker-compose run --rm cypress run TEST1"
          }
        }
        stage("Test2") {
          steps {
            sh "docker-compose run --rm cypress run Test2"
          }
        }
        stage("Test3") {
          steps {
            sh "docker-compose run --rm cypress run Test3"
          }
        }
      }
    }
  }
  post {
    always {
       archiveArtifacts artifacts:'cypress/screenshots/**', allowEmptyArchive: true
       archiveArtifacts artifacts:'cypress/videos/**', allowEmptyArchive: true
       sh "rm -rf ./node_modules"
      //sh "rm -f *.zip | echo 'No package cleanup needed, no zip present'"
    }
    failure {
      slackSend(channel: "channel-name", message: "Automatic CYPRESS Runner RUN:`${env.BUILD_NUMBER}` <https://build.url/${env.BUILD_NUMBER}|failed>", color: "danger", iconEmoji:":sweating-intensifies:")
    }
    fixed {
      slackSend(channel: "channel-name", message: "Automatic CYPRESS Runner RUN:`${env.BUILD_NUMBER}` <https://build.url/${env.BUILD_NUMBER}|pass>", color: "good", iconEmoji:":pepe_thumbsup:")
    }
  }
}
