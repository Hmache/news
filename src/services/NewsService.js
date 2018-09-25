const baseURL = 'http://content.guardianapis.com',
      apiKey   = "9dd187e3-fd5f-4f0f-9536-09945ff4bb16";

const NewsService = {
  getPosts : (promoted = false) => {
    return baseURL + '/search?api-key=' + apiKey + '&page-size=12&show-fields=thumbnail,body,headline'+ '&isPremoderated=' + promoted;
  },
  getPostsByCategory : (category = '') => {
    return baseURL + '/search?api-key=' + apiKey + '&page-size=12&show-fields=thumbnail,body,headline&section=' + category ;
  }
}
//https://open-platform.theguardian.com/documentation/search
export default NewsService;
