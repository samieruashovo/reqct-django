import './App.css';
import { useState, useEffect } from 'react';
import ArticleList from './components/ArticleList';
import Form from './components/Form';
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'


function App() {
  const [articles, setArticles] = useState([])
  const [editArticle, setEditArticle] = useState(null)
  const [token, setToken, removeToken] = useCookies(['mytoken'])
  let history = useNavigate()


  useEffect(() => {

    // console.log(s)
    fetch('http://127.0.0.1:8000/api/articles/', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Token " + token.mytoken
      }
    }).then(resp => resp.json()).then(resp => setArticles(resp)).catch(error => console.log(token))
  }, [])
  useEffect(() => {
    if (!token['mytoken']) {
      history('/')
    }
  }, [token])
  const editBtn = (article) => {
    setEditArticle(article)
  }

  const updatedInformation = (article) => {
    const new_article = articles.map(myarticle => {
      if (myarticle.id === article.id) {
        return article;
      } else {
        return myarticle;
      }
    })
    setArticles(new_article)
  }
  const articleForm = () => {
    setEditArticle({ title: '', description: "" })
  }
  const insertedInformation = (article) => {
    const new_article = [...articles, article]
    setArticles(new_article)
  }
  const deleteBtn = (article) => {
    const new_article = articles.filter(myarticle => {
      if (myarticle.id === article.id) {
        return false;
      } return true;
    })
    setArticles(new_article)
  }
  const logoutBtn = () => {
    removeToken(['mytoken'])

  }

  return (
    <div className="App">

      <div className='row'>
        <div className='col'>
          <h1>
            Django and react js Blog app
          </h1>
          <br />
        </div>
        <div className='col'>
          <button onClick={articleForm} className='btn btn-primary'>Insert Article</button>
        </div>
        <div className='col'>
          <button onClick={logoutBtn} className='btn btn-primary'>Logout</button>
        </div>

      </div>
      <ArticleList articles={articles} editBtn={editBtn} deleteBtn={deleteBtn} />
      {
        editArticle ?
          <Form article={editArticle} updatedInformation={updatedInformation} insertedInformation={insertedInformation} />
          : null
      }


    </div>
  );
}

export default App;
