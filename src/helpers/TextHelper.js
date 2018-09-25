var TextHelper = {
  truncate : function(text, limit = 100) {
    return (text ? text.length : 0) > limit ? `${text.substr(0, limit)}...` : text;
  }
}

export default TextHelper;
