import Image from "next/image";
import { HeaderImage, ImageCard, ProfileCard, } from "@/components";

export default function Home() {
  return (
     <div>
          <ProfileCard toptext="1" NameTutorTitle="Ny Sreyneang" NameSubject="English teacher" RetingTutor="20" Studentsqty="100" PriceTutor="200">
        <HeaderImage>
          <ImageCard
            alt="this pic"
            ImageSrc="sreyneang.png"
          >
            {" "}
          </ImageCard>
        </HeaderImage>
      </ProfileCard>
     </div>
  );
}
