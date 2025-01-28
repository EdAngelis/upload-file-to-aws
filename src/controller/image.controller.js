export const upload = async (req, res) => {
  res.status(200).json({
    message: "Image uploaded successfully",
  });
};

export const fetch = async (req, res) => {
  console.log(req);
  res.status(200).json({
    message: "Image fetched successfully",
    file: req,
  });
};
