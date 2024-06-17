import { Button } from "flowbite-react";
import nyamuk from "../assets/images/nyamuk.svg";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Index() {
  return (
    <section className="items-enter flex h-screen w-full justify-center gap-6 bg-gradient-to-br from-blue-50 to-blue-100 p-16">
      <div className="flex h-full max-w-[45%] flex-col justify-center gap-2">
        <h1 className="text-4xl font-bold">
          Diagnosa Penyakit Demam Berdarah Sebelum Terlambat Dengan Mudah
        </h1>
        <h2 className="mb-4">
          Cegah gejala DBD yang lebih parah dengan diagnosa yang lebih awal
        </h2>
        <div>
          <Button
            as={Link}
            to="/diagnosa"
            outline
            gradientDuoTone="cyanToBlue"
            className="font-semibold size-fit"
          >
            Mulai sekarang
            <FaArrowRight className="ml-2 size-5" />
          </Button>
        </div>
      </div>
      <div className="flex h-full flex-1 items-center justify-center">
        <img src={nyamuk} alt="Nyamuk DBD" className="size-[65vh]" />
      </div>
    </section>
  );
}

export default Index;
