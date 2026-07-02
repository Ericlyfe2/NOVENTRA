import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ShaderBackground from "@/components/ShaderBackground";

export default function PageLayout({ title, intro, children }) {
  return (
    <>
      <div className="fixed inset-0 z-[-1]">
        <div className="w-full h-full">
          <ShaderBackground />
        </div>
      </div>
      <SiteHeader />
      <main>
        <section className="pt-3xl pb-xl px-gutter">
          <div className="max-w-container-max mx-auto">
            <h1 className="font-display-md text-display-md mb-md gradient-text inline-block">{title}</h1>
            {intro ? (
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[42rem]">
                {intro}
              </p>
            ) : null}
          </div>
        </section>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
