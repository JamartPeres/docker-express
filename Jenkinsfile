pipeline {
    agent any

    environment {
        // Aquí podrías definir variables de entorno que necesitas
        BRANCH_NAME_CLEANED = '' // Se establecerá dinámicamente más abajo
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
        
        // Aquí podrías añadir más stages como para pruebas o despliegue
    }
}
