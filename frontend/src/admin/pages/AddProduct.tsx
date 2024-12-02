const AddProduct = () => {
  //function to get file base64
  const handleFileChange = (file: File | null): Promise<string | undefined> => {
    return new Promise((resolve, reject) => {
      if (!file) {
        resolve(undefined);
        return;
      }

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result as string);
      };

      fileReader.onerror = () => {
        reject(new Error("Failed to read file."));
      };
    });
  };

  //function to handle single file input
  const handleSingleFileInput = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files ? e.target.files[0] : null;
    try {
      const image = await handleFileChange(file); // Get base64 string
      //   formik.setFieldValue("cover_image", image); // Set the form field value
    } catch (error) {
      console.error("Error reading file:", error);
    }
  };

  // function to handle multiple images input (other images)
  const handleMultipleFileInput = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files ? e.target.files : null;
    try {
      let images: string[] = [];
      if (files) {
        for (let file of files) {
          const image = await handleFileChange(file); // Get base64 string
          if (image) {
            images.push(image);
          }
        }
      }
      //   formik.setFieldValue("other_images", images); // Set the form field value
    } catch (error) {
      console.error("Error reading file:", error);
    }
  };
  return <div>AddProduct</div>;
};

export default AddProduct;
