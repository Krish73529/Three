//get all user
export const getAll = (req, res) => {
  res.status(200).json({
    message: "All users fetched",
  });
};

//get user by id
export const getById = (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    message: "user id: ${id} fetched",
  });
};

export const create = (req, res) => {
  re.json({
    message: "User created",
  });
};

export const update = (req, res) => {
  const id = req.params.id;
  res.json({
    message: "User id $(id) updated",
  });
};

export const remove = (req, res) => {
  const { id } = req.params;
  res.json({
    message: "User id ${id} deleted",
  });
};
