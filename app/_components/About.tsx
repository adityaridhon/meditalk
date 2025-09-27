import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

const About = () => {
  return (
    <>
      <div className="about-section my-20">
        <h1 className="text-4xl font-bold text-center pt-12">About Us</h1>
        <div className="flex flex-col md:flex-row justify-center items-center pt-12 px-24 gap-10">
          <div className="relative">
            <HeroVideoDialog
              className="block dark:hidden"
              animationStyle="top-in-bottom-out"
              videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
              thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
              thumbnailAlt="Hero Video"
            />
            <HeroVideoDialog
              className="hidden dark:block"
              animationStyle="top-in-bottom-out"
              videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
              thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
              thumbnailAlt="Hero Video"
            />
          </div>
          <div className="max-w-xl space-y-4">
            <h3 className="text-3xl font-semibold">
              We give you our <span className="text-primary">best</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              corrupti beatae animi libero porro. Maiores fugiat eius
              reprehenderit tenetur, numquam quo natus harum repellat recusandae
              nobis consequuntur cumque labore praesentium, suscipit, possimus
              tempore unde. Error porro at adipisci voluptas, quasi ullam quidem
              exercitationem odit, temporibus optio illum? Perferendis, id
              veniam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
