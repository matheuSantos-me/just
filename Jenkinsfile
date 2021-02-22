node('Application') {
  def app_name = "ecommerce-web"
  def git_url = "git@github.com:matheuSantos-me/just.git"

  stage('Clone Repository') {
    git branch: 'master',
    credentialsId: 'Github',
    url: git_url
  }

  stage('Build'){
    sh "npm install && npm run build"
  }

  stage('Deploy'){
    sh "cp -r build/* /var/www/html"
  }
}