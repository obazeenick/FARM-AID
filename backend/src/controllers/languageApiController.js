import natural from "natural";

export const fetchExternalData = async (req, res) => {
  try {

    // Endpoint to handle language processing requests

    const { text } = req.body;
    // Tokenize the text
    const tokenizer = new natural.WordTokenizer();
    const tokens = tokenizer.tokenize(text);

    // Stemming example
    const stemmer = natural.PorterStemmer;
    const stems = tokens.map(token => stemmer.stem(token));

    res.status(200).json({
      status: "success",
      message:  tokens,
        stems 
    });
  } catch (error) {
    next(error);
  }
};

