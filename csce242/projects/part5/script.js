const getArticles = async () => {
    const url = "featuredArticles.json";
    try {
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      console.log(error);
    }
  }; 
  const showArticles = async () => {
    const articles = await getArticles();
    const articlesContainer = document.getElementById("featured-articles");
    
    articles.forEach(article => {
        articlesContainer.appendChild(createArticleElement(article));
    });
  };
  
  const createArticleElement = (article) => {
    const articleDiv = document.createElement("div");
    articleDiv.classList.add("article");
    
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    const img = document.createElement("img");
    img.src = "images/" + article.img_name;
    img.alt = article.title;
    imageContainer.appendChild(img);
    
    const articleLink = document.createElement("a");
    articleLink.href = article.link;
    articleLink.textContent = article.title;
    
    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent = article.description;
    
    articleDiv.appendChild(imageContainer);
    articleDiv.appendChild(articleLink);
    articleDiv.appendChild(descriptionParagraph);
    
    return articleDiv;
  };

  showArticles();