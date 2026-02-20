import mongoose from "mongoose";

//category schema

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamp: true },
);

//collection
//model

const Category = mongoose.model("category", categorySchema);

//create
export const create = async (req, res) => {
  try {
    //name, description
    //const data = req.body

    console.log("req  body", req.body);
    const { name, description } = req.body;

    //db op=> save category to db

    const category = await Category.create({ name, description });

    res.json({
      message: `Category created`,
      data: category,
    });
  } catch (error) {
    res.json({
      message: error?.message || "something went wrong",
      data: null,
    });
  }
};

//get by id
export const getById = (req, res) => {
  const { id } = req.params;
  //db operation
  //processing
  //error handling

  res.json({
    message: `Category id:${id} fetched`,
  });
};

//update

export const update = (req, res) => {
  const { id } = req.params;
  res.json({
    message: `Category id:${id} updated`,
  });
};

//delete

export const remove = (req, res) => {
  const { id } = req.params;
  res.json({
    message: `Category id:${id} deleted`,
  });
};
