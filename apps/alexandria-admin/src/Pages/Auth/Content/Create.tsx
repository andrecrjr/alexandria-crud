import Layout from "@/components/Layout";
import FormInput from "@/components/forms";
import api from "@/service/axios";

const CreatePage = () => {
  return (
    <Layout>
      <button
        onClick={async (e) => {
          e.preventDefault();
          const data = {
            title: "Harry potter e o prisioneiro de askaban",
            numberPages: 500,
            isbn: "578457542",
            description: "new book",
            type: {
              id: 1,
            },
          };

          await api.post("/content", data, {
            withCredentials: true,
          });
        }}
      >
        Criar
      </button>
      <FormInput />
    </Layout>
  );
};

export default CreatePage;
