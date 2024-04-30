pipeline {
    agent any

    environment {
        
        BRANCH_NAME_CLEANED = '' 
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Pre-Build') {
            steps {
                script {
                    // Limpia el nombre de la rama de 'origin/'
                    BRANCH_NAME_CLEANED = sh(returnStdout: true, script: "echo ${env.BRANCH_NAME} | sed 's/origin\\///'").trim()
                }
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
                sh "docker build -t sicci-${BRANCH_NAME_CLEANED}:1.0.0-${env.BUILD_NUMBER} ."
            }
        }
        
        
    }
}
