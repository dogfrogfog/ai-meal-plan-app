import { Button } from "@/components/ui/button";
import { getUserAuth } from "@/lib/auth/utils";
import Link from "next/link";

export default async function Home() {
  const userAuth = await getUserAuth();
  return (
    <main className="space-y-6 flex flex-col">
      <div className="self-center w-full max-w-[1340px] mt-16 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0">
            <span className="flex grow flex-col items-stretch mt-5 px-5 max-md:max-w-full">
              <div className="text-violet-500 text-5xl font-extrabold leading-[77px] tracking-tight max-md:max-w-full max-md:text-4xl max-md:leading-[75px]">
                <span className="font-bold text-violet-500">Culinary AI</span>
                <span className="font-bold">
                  : Elevate Your Cooking Experience with Smart Recipes
                </span>
              </div>
              <div className="text-black text-lg tracking-wide mt-14 max-md:max-w-full max-md:mt-10">
                Effortless cooking, personalized recipes, saving time and money.
                Unleash flavor!
              </div>
              <span className="text-white text-2xl font-semibold whitespace-nowrap bg-violet-500 justify-center items-stretch mt-14 px-14 py-6 rounded-[32.8px] self-start max-md:mt-10 max-md:pl-5 max-md:pr-6">
                Get Started
              </span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/615f1920c43b5fce09df221911a16298a86ea32f0bc68ced7a0e9ca0f3756f28?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                className="aspect-[3.76] object-contain object-center w-[188px] overflow-hidden max-w-full mt-11 self-start max-md:mt-10"
              />
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2c744e1e6bb3c724528bf06b7027d320fba02d39e5670cc5093552f53cce1811?apiKey=2bd386ac58de4a4f9e996607125fc961&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c744e1e6bb3c724528bf06b7027d320fba02d39e5670cc5093552f53cce1811?apiKey=2bd386ac58de4a4f9e996607125fc961&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c744e1e6bb3c724528bf06b7027d320fba02d39e5670cc5093552f53cce1811?apiKey=2bd386ac58de4a4f9e996607125fc961&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c744e1e6bb3c724528bf06b7027d320fba02d39e5670cc5093552f53cce1811?apiKey=2bd386ac58de4a4f9e996607125fc961&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c744e1e6bb3c724528bf06b7027d320fba02d39e5670cc5093552f53cce1811?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c744e1e6bb3c724528bf06b7027d320fba02d39e5670cc5093552f53cce1811?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c744e1e6bb3c724528bf06b7027d320fba02d39e5670cc5093552f53cce1811?apiKey=2bd386ac58de4a4f9e996607125fc961&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2c744e1e6bb3c724528bf06b7027d320fba02d39e5670cc5093552f53cce1811?apiKey=2bd386ac58de4a4f9e996607125fc961&"
              className="aspect-[1.62] object-contain object-center w-full overflow-hidden max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch w-full mt-64 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-3/5 max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex min-h-[333px] grow pt-1.5 px-14 items-end max-md:max-w-full max-md:mt-6 max-md:px-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ebff70b9e8a8567c3246cee52aef841239ee791aee3d2206f881952fca88e2dc?apiKey=2bd386ac58de4a4f9e996607125fc961&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ebff70b9e8a8567c3246cee52aef841239ee791aee3d2206f881952fca88e2dc?apiKey=2bd386ac58de4a4f9e996607125fc961&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ebff70b9e8a8567c3246cee52aef841239ee791aee3d2206f881952fca88e2dc?apiKey=2bd386ac58de4a4f9e996607125fc961&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ebff70b9e8a8567c3246cee52aef841239ee791aee3d2206f881952fca88e2dc?apiKey=2bd386ac58de4a4f9e996607125fc961&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ebff70b9e8a8567c3246cee52aef841239ee791aee3d2206f881952fca88e2dc?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ebff70b9e8a8567c3246cee52aef841239ee791aee3d2206f881952fca88e2dc?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ebff70b9e8a8567c3246cee52aef841239ee791aee3d2206f881952fca88e2dc?apiKey=2bd386ac58de4a4f9e996607125fc961&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ebff70b9e8a8567c3246cee52aef841239ee791aee3d2206f881952fca88e2dc?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                className="absolute h-full w-full object-cover object-center inset-0"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b105fd8d82f35e8b812199c24114dff2c77f8b73de0839721263bca33020c14?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                className="aspect-[1.99] object-contain object-center w-[650px] fill-purple-600 mix-blend-hue overflow-hidden max-w-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-2/5 ml-5 max-md:w-full max-md:ml-0">
            <span className="flex flex-col items-stretch mt-6 px-5 max-md:max-w-full max-md:mt-10">
              <div className="text-purple-600 text-5xl font-bold leading-[77px] tracking-tight max-md:max-w-full max-md:text-4xl max-md:leading-[75px]">
                What is <span className="text-purple-600">SEO?</span>
              </div>
              <div className="text-black text-lg tracking-wide mt-14 max-md:max-w-full max-md:mt-10">
                SEO is a kind of service through which you can get success for
                online business. The traffic potential is generated by SEO for
                all types of websites. SEO is a format of Search engine
                optimization.
                <br />
                Through it, you can optimize your website & can achieve higher
                rankings in search engines with organic results.
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="text-violet-500 text-center text-lg font-semibold leading-7 self-center whitespace-nowrap mt-28 max-md:mt-10">
        Services
      </div>
      <div className="text-black text-5xl font-bold leading-[77px] tracking-tight self-center whitespace-nowrap mt-8 max-md:text-4xl max-md:leading-[75px]">
        <span className="text-violet-500">SEO</span>
      </div>
      <div className="text-gray-500 text-center text-xl leading-8 self-center mt-9 max-md:max-w-full">
        A quick preview of our Incredible Search Engine Optimization Services
        World Wide
      </div>
      <div className="self-center z-[1] flex w-full max-w-[994px] justify-between gap-5 mt-20 px-5 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/10b971ae8fb1a501256cdf27429f65c8a440d617e7c724704f5ef3fb4a16e842?apiKey=2bd386ac58de4a4f9e996607125fc961&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/10b971ae8fb1a501256cdf27429f65c8a440d617e7c724704f5ef3fb4a16e842?apiKey=2bd386ac58de4a4f9e996607125fc961&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/10b971ae8fb1a501256cdf27429f65c8a440d617e7c724704f5ef3fb4a16e842?apiKey=2bd386ac58de4a4f9e996607125fc961&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/10b971ae8fb1a501256cdf27429f65c8a440d617e7c724704f5ef3fb4a16e842?apiKey=2bd386ac58de4a4f9e996607125fc961&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/10b971ae8fb1a501256cdf27429f65c8a440d617e7c724704f5ef3fb4a16e842?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/10b971ae8fb1a501256cdf27429f65c8a440d617e7c724704f5ef3fb4a16e842?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/10b971ae8fb1a501256cdf27429f65c8a440d617e7c724704f5ef3fb4a16e842?apiKey=2bd386ac58de4a4f9e996607125fc961&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/10b971ae8fb1a501256cdf27429f65c8a440d617e7c724704f5ef3fb4a16e842?apiKey=2bd386ac58de4a4f9e996607125fc961&"
          className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 mt-3"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/268ad31d19ae07d81fe3d062db34f0f72d8313c99d751bf8358ee8dc9382726c?apiKey=2bd386ac58de4a4f9e996607125fc961&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/268ad31d19ae07d81fe3d062db34f0f72d8313c99d751bf8358ee8dc9382726c?apiKey=2bd386ac58de4a4f9e996607125fc961&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/268ad31d19ae07d81fe3d062db34f0f72d8313c99d751bf8358ee8dc9382726c?apiKey=2bd386ac58de4a4f9e996607125fc961&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/268ad31d19ae07d81fe3d062db34f0f72d8313c99d751bf8358ee8dc9382726c?apiKey=2bd386ac58de4a4f9e996607125fc961&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/268ad31d19ae07d81fe3d062db34f0f72d8313c99d751bf8358ee8dc9382726c?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/268ad31d19ae07d81fe3d062db34f0f72d8313c99d751bf8358ee8dc9382726c?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/268ad31d19ae07d81fe3d062db34f0f72d8313c99d751bf8358ee8dc9382726c?apiKey=2bd386ac58de4a4f9e996607125fc961&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/268ad31d19ae07d81fe3d062db34f0f72d8313c99d751bf8358ee8dc9382726c?apiKey=2bd386ac58de4a4f9e996607125fc961&"
          className="aspect-[1.03] object-contain object-center w-full overflow-hidden shrink-0 flex-1 mt-1"
        />
        <div className="flex-col justify-center overflow-hidden relative flex aspect-square flex-1 py-0.5 items-start">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c48451207cba563524b11518a650e139c9620947d4adfc56a13f7474312b3cc7?apiKey=2bd386ac58de4a4f9e996607125fc961&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c48451207cba563524b11518a650e139c9620947d4adfc56a13f7474312b3cc7?apiKey=2bd386ac58de4a4f9e996607125fc961&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c48451207cba563524b11518a650e139c9620947d4adfc56a13f7474312b3cc7?apiKey=2bd386ac58de4a4f9e996607125fc961&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c48451207cba563524b11518a650e139c9620947d4adfc56a13f7474312b3cc7?apiKey=2bd386ac58de4a4f9e996607125fc961&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c48451207cba563524b11518a650e139c9620947d4adfc56a13f7474312b3cc7?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c48451207cba563524b11518a650e139c9620947d4adfc56a13f7474312b3cc7?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c48451207cba563524b11518a650e139c9620947d4adfc56a13f7474312b3cc7?apiKey=2bd386ac58de4a4f9e996607125fc961&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c48451207cba563524b11518a650e139c9620947d4adfc56a13f7474312b3cc7?apiKey=2bd386ac58de4a4f9e996607125fc961&"
            className="absolute h-full w-full object-cover object-center inset-0"
          />
          <div className="relative mix-blend-hue bg-purple-600 flex shrink-0 h-[127px] flex-col" />
        </div>
      </div>
      <div className="self-center w-full max-w-[1244px] px-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <span className="shadow-lg bg-white flex grow flex-col items-stretch w-full pl-7 pr-10 py-12 rounded-3xl max-md:mt-6 max-md:px-5">
              <div className="text-violet-500 text-2xl font-semibold leading-9 capitalize mt-7">
                In-depth Site Audit
              </div>
              <div className="text-black text-xl font-medium leading-8 mt-8 mb-14 max-md:mb-10">
                Full market audit to highlight areas of your website that can be
                improved, including competitor analysis. Our SEO experts then
                create a detailed game plan to boost your conversions.
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="shadow-lg bg-white flex grow flex-col items-stretch w-full px-9 py-12 rounded-3xl max-md:mt-6 max-md:px-5">
              <div className="text-violet-500 text-2xl font-semibold leading-9 capitalize mt-7">
                Traffic Mapping
              </div>
              <div className="text-black text-xl font-medium leading-8 my-8">
                We carry out in-depth market research to identify the type of
                traffic you need and boost conversions. By doing this, you'll
                get a high volume of qualified traffic, compared to using a
                scatter-gun approach.
              </div>
            </span>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="shadow-lg bg-white flex grow flex-col items-stretch w-full px-9 py-12 rounded-3xl max-md:mt-6 max-md:px-5">
              <div className="text-violet-500 text-2xl font-semibold leading-9 capitalize mt-7">
                Technical Optimization
              </div>{" "}
              <div className="text-black text-xl font-medium leading-8 mt-8">
                We make sure that every detail on your website is optimized to
                get the best SEO and conversion results.
                <br />
                We do things like A/B split-testing call-to-action buttons and
                editing the meto-descriptions to ensure everything is primed and
                ready to convert.
              </div>
            </span>
          </div>
        </div>
      </div>{" "}
      <div className="self-center z-[1] flex w-full max-w-[997px] items-stretch justify-between gap-5 mt-16 px-5 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8d958e3c28938954fd2ab1c429a6f3531df60549a1892a0e0f55dacb0d576d28?apiKey=2bd386ac58de4a4f9e996607125fc961&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d958e3c28938954fd2ab1c429a6f3531df60549a1892a0e0f55dacb0d576d28?apiKey=2bd386ac58de4a4f9e996607125fc961&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d958e3c28938954fd2ab1c429a6f3531df60549a1892a0e0f55dacb0d576d28?apiKey=2bd386ac58de4a4f9e996607125fc961&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d958e3c28938954fd2ab1c429a6f3531df60549a1892a0e0f55dacb0d576d28?apiKey=2bd386ac58de4a4f9e996607125fc961&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d958e3c28938954fd2ab1c429a6f3531df60549a1892a0e0f55dacb0d576d28?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d958e3c28938954fd2ab1c429a6f3531df60549a1892a0e0f55dacb0d576d28?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d958e3c28938954fd2ab1c429a6f3531df60549a1892a0e0f55dacb0d576d28?apiKey=2bd386ac58de4a4f9e996607125fc961&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d958e3c28938954fd2ab1c429a6f3531df60549a1892a0e0f55dacb0d576d28?apiKey=2bd386ac58de4a4f9e996607125fc961&"
          className="aspect-square object-contain object-center w-[139px] overflow-hidden shrink-0 max-w-full mt-2.5 self-start"
        />{" "}
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/582958cd4f8c863f97fc9d57bb605a37b73423eec55be70bf687a3e0590dba23?apiKey=2bd386ac58de4a4f9e996607125fc961&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/582958cd4f8c863f97fc9d57bb605a37b73423eec55be70bf687a3e0590dba23?apiKey=2bd386ac58de4a4f9e996607125fc961&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/582958cd4f8c863f97fc9d57bb605a37b73423eec55be70bf687a3e0590dba23?apiKey=2bd386ac58de4a4f9e996607125fc961&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/582958cd4f8c863f97fc9d57bb605a37b73423eec55be70bf687a3e0590dba23?apiKey=2bd386ac58de4a4f9e996607125fc961&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/582958cd4f8c863f97fc9d57bb605a37b73423eec55be70bf687a3e0590dba23?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/582958cd4f8c863f97fc9d57bb605a37b73423eec55be70bf687a3e0590dba23?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/582958cd4f8c863f97fc9d57bb605a37b73423eec55be70bf687a3e0590dba23?apiKey=2bd386ac58de4a4f9e996607125fc961&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/582958cd4f8c863f97fc9d57bb605a37b73423eec55be70bf687a3e0590dba23?apiKey=2bd386ac58de4a4f9e996607125fc961&"
          className="aspect-square object-contain object-center w-[135px] overflow-hidden shrink-0 max-w-full self-start"
        />{" "}
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/18da3c23213ccad4297e6a4b90ccce8516976a0ee35f8be2ba9523540e918961?apiKey=2bd386ac58de4a4f9e996607125fc961&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/18da3c23213ccad4297e6a4b90ccce8516976a0ee35f8be2ba9523540e918961?apiKey=2bd386ac58de4a4f9e996607125fc961&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/18da3c23213ccad4297e6a4b90ccce8516976a0ee35f8be2ba9523540e918961?apiKey=2bd386ac58de4a4f9e996607125fc961&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/18da3c23213ccad4297e6a4b90ccce8516976a0ee35f8be2ba9523540e918961?apiKey=2bd386ac58de4a4f9e996607125fc961&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/18da3c23213ccad4297e6a4b90ccce8516976a0ee35f8be2ba9523540e918961?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/18da3c23213ccad4297e6a4b90ccce8516976a0ee35f8be2ba9523540e918961?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/18da3c23213ccad4297e6a4b90ccce8516976a0ee35f8be2ba9523540e918961?apiKey=2bd386ac58de4a4f9e996607125fc961&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/18da3c23213ccad4297e6a4b90ccce8516976a0ee35f8be2ba9523540e918961?apiKey=2bd386ac58de4a4f9e996607125fc961&"
          className="aspect-[1.04] object-contain object-center w-[154px] overflow-hidden shrink-0 max-w-full"
        />
      </div>{" "}
      <div className="self-center w-full max-w-[1244px] px-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <span className="shadow-lg bg-white flex grow flex-col items-stretch w-full px-6 py-12 rounded-3xl max-md:mt-6 max-md:px-5">
              <div className="text-violet-500 text-2xl font-semibold leading-9 capitalize mt-6">
                Technical Improvements
              </div>{" "}
              <div className="text-black text-xl font-medium leading-8 mt-8">
                The next step is to sort out any technical issues that may
                create a high bounce rate - slow page loading, unreliable uptime
                service, poorly designed UX, etc. Our SEO techs are the best in
                the business and know how to optimize your site quickly and
                efficiently.
              </div>
            </span>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="shadow-lg bg-white flex grow flex-col items-stretch w-full pl-6 pr-10 py-11 rounded-3xl max-md:mt-6 max-md:px-5">
              <div className="text-violet-500 text-2xl font-semibold leading-9 capitalize mt-6">
                Keyword Mapping
              </div>{" "}
              <div className="text-black text-xl font-medium leading-8 mt-9">
                Our SEO experts know exactly how to find keywords that move the
                needle. We don't just go for the highest search volume keywords,
                although these are important to include. We also ensure that we
                include niche-specific keywords to attract the right people to
                your site.
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="shadow-lg bg-white flex grow flex-col items-stretch w-full px-9 py-12 rounded-3xl max-md:mt-6 max-md:px-5">
              <div className="text-violet-500 text-2xl font-semibold leading-9 capitalize whitespace-nowrap mt-6">
                Penalty Prevention
              </div>
              <div className="text-black text-xl font-medium leading-8 mt-9 mb-12 max-md:mb-10">
                There's nothing more devastating to your results than receiving
                a penalty. We've helped hundreds of companies recover from other
                link builders penalties and set them back on the path of
                success.
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="self-stretch w-full mt-24 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
            <span className="bg-sky-50 flex grow flex-col items-stretch w-full px-20 py-12 max-md:max-w-full max-md:px-5">
              <div className="text-violet-500 text-5xl font-bold leading-[77px] tracking-tight mt-20 max-md:max-w-full max-md:text-4xl max-md:leading-[75px] max-md:mr-1.5 max-md:mt-10">
                Why is <span className="text-violet-500">SEO important?</span>
              </div>
              <div className="text-black text-lg tracking-wide w-[593px] mt-10 mb-10 max-md:max-w-full max-md:mr-1.5 max-md:mt-10">
                <span className="font-bold text-xl text-black">
                  In-depth Site Audit
                </span>
                <br />
                Full market audit to highlight areas of your website that can be
                improved, including competitor analysis. Our SEO experts then
                create a detailed game plan to boost your conversions.
                <br />
                <br />
                <span className="font-bold text-xl text-black">
                  Traffic Mapping
                </span>
                <br />
                We carry out in-depth market research to identify the type of
                traffic you need and boost conversions. By doing this, you'll
                get a high volume of qualified traffic, compared to using a
                scatter-gun approach.
                <br />
                <br />
                <span className="font-bold text-xl text-black">
                  Technical Optimization
                </span>
                <br />
              </div>
            </span>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-violet-500 flex grow flex-col justify-center items-stretch w-full px-14 py-10 max-md:max-w-full max-md:px-5">
              <span className="shadow-2xl bg-white flex flex-col px-16 py-11 rounded-3xl max-md:max-w-full max-md:px-5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3e943bc14be7347b4bf151b8e0424e4dd4f6e4da33c4d08b2364ec4c9928a04b?apiKey=2bd386ac58de4a4f9e996607125fc961&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e943bc14be7347b4bf151b8e0424e4dd4f6e4da33c4d08b2364ec4c9928a04b?apiKey=2bd386ac58de4a4f9e996607125fc961&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e943bc14be7347b4bf151b8e0424e4dd4f6e4da33c4d08b2364ec4c9928a04b?apiKey=2bd386ac58de4a4f9e996607125fc961&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e943bc14be7347b4bf151b8e0424e4dd4f6e4da33c4d08b2364ec4c9928a04b?apiKey=2bd386ac58de4a4f9e996607125fc961&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e943bc14be7347b4bf151b8e0424e4dd4f6e4da33c4d08b2364ec4c9928a04b?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e943bc14be7347b4bf151b8e0424e4dd4f6e4da33c4d08b2364ec4c9928a04b?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e943bc14be7347b4bf151b8e0424e4dd4f6e4da33c4d08b2364ec4c9928a04b?apiKey=2bd386ac58de4a4f9e996607125fc961&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3e943bc14be7347b4bf151b8e0424e4dd4f6e4da33c4d08b2364ec4c9928a04b?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                  className="aspect-[3.61] object-contain object-center w-64 overflow-hidden max-w-full self-start"
                />{" "}
                <div className="text-black text-lg tracking-wide self-stretch mt-9 max-md:max-w-full">
                  Choose our hands-free SEO packages <br />
                  and sky-rocket your online business with <br />
                  free traffic from Google.
                </div>{" "}
                <span className="text-stone-800 text-base whitespace-nowrap bg-zinc-100 self-stretch justify-center mt-10 pl-9 pr-16 py-6 rounded-[130px] items-start max-md:max-w-full max-md:mt-10 max-md:px-5">
                  Name
                </span>{" "}
                <span className="text-stone-800 text-base whitespace-nowrap bg-zinc-100 self-stretch justify-center mt-5 pl-9 pr-16 py-6 rounded-[130px] items-start max-md:max-w-full max-md:px-5">
                  Address
                </span>{" "}
                <span className="text-stone-800 text-base whitespace-nowrap bg-zinc-100 self-stretch justify-center mt-5 pl-9 pr-16 py-6 rounded-[130px] items-start max-md:max-w-full max-md:px-5">
                  Phone Number
                </span>{" "}
                <span className="text-stone-800 text-base whitespace-nowrap bg-zinc-100 self-stretch justify-center mt-5 pl-9 pr-16 py-6 rounded-[130px] items-start max-md:max-w-full max-md:px-5">
                  Website
                </span>{" "}
                <span className="text-white text-lg font-semibold whitespace-nowrap bg-violet-500 self-stretch justify-center items-center mt-6 px-16 py-5 rounded-[32.8px] max-md:max-w-full max-md:px-5">
                  Get Quote Now
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>{" "}
      <span className="self-stretch flex w-full flex-col mt-28 px-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="text-neutral-500 text-center text-lg font-semibold leading-7 self-center whitespace-nowrap">
          Our Progress
        </div>{" "}
        <div className="text-violet-500 text-center text-5xl font-bold leading-[77px] tracking-tight capitalize self-center mt-3 max-md:max-w-full">
          <span className="text-5xl leading-[76.7109146118164px] tracking-tight capitalize text-black">
            Why{" "}
          </span>
          <span className="text-5xl leading-[76.7109146118164px] tracking-tight capitalize text-violet-500">
            work
          </span>
          <span className="text-5xl leading-[76.7109146118164px] tracking-tight capitalize text-black">
            {" "}
            with us ?
          </span>
        </div>{" "}
        <div className="text-gray-500 text-center text-xl leading-8 self-center mt-6 max-md:max-w-full">
          A quick preview of the work quality we are offering
        </div>{" "}
        <div className="self-center z-[1] flex w-full max-w-[1139px] items-center justify-between gap-5 mt-10 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="mix-blend-hue bg-indigo-600 flex w-[104px] shrink-0 h-[94px] flex-col my-auto" />{" "}
          <div className="self-stretch max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0">
                <div className="mix-blend-hue bg-indigo-600 flex w-[104px] shrink-0 h-[94px] flex-col m-auto max-md:mt-10" />
              </div>{" "}
              <div className="flex flex-col items-stretch w-[43%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex-col overflow-hidden relative flex aspect-square w-[131px] items-stretch pt-1 pb-4 px-3.5 max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/656171090a879607bd8d490924ba05d9177cc3868835570083cb0fa5509b7104?apiKey=2bd386ac58de4a4f9e996607125fc961&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/656171090a879607bd8d490924ba05d9177cc3868835570083cb0fa5509b7104?apiKey=2bd386ac58de4a4f9e996607125fc961&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/656171090a879607bd8d490924ba05d9177cc3868835570083cb0fa5509b7104?apiKey=2bd386ac58de4a4f9e996607125fc961&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/656171090a879607bd8d490924ba05d9177cc3868835570083cb0fa5509b7104?apiKey=2bd386ac58de4a4f9e996607125fc961&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/656171090a879607bd8d490924ba05d9177cc3868835570083cb0fa5509b7104?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/656171090a879607bd8d490924ba05d9177cc3868835570083cb0fa5509b7104?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/656171090a879607bd8d490924ba05d9177cc3868835570083cb0fa5509b7104?apiKey=2bd386ac58de4a4f9e996607125fc961&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/656171090a879607bd8d490924ba05d9177cc3868835570083cb0fa5509b7104?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="absolute h-full w-full object-cover object-center inset-0"
                  />{" "}
                  <div className="relative mix-blend-hue bg-indigo-600 flex shrink-0 h-28 flex-col" />
                </div>
              </div>{" "}
              <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex-col overflow-hidden relative flex aspect-square w-28 justify-center items-stretch px-1 py-0.5 max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4a487638c9c63dfca591c3f9100411b45e265dbb68a3e7c6edb5b3a7f864e3ee?apiKey=2bd386ac58de4a4f9e996607125fc961&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a487638c9c63dfca591c3f9100411b45e265dbb68a3e7c6edb5b3a7f864e3ee?apiKey=2bd386ac58de4a4f9e996607125fc961&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a487638c9c63dfca591c3f9100411b45e265dbb68a3e7c6edb5b3a7f864e3ee?apiKey=2bd386ac58de4a4f9e996607125fc961&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a487638c9c63dfca591c3f9100411b45e265dbb68a3e7c6edb5b3a7f864e3ee?apiKey=2bd386ac58de4a4f9e996607125fc961&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a487638c9c63dfca591c3f9100411b45e265dbb68a3e7c6edb5b3a7f864e3ee?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a487638c9c63dfca591c3f9100411b45e265dbb68a3e7c6edb5b3a7f864e3ee?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a487638c9c63dfca591c3f9100411b45e265dbb68a3e7c6edb5b3a7f864e3ee?apiKey=2bd386ac58de4a4f9e996607125fc961&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4a487638c9c63dfca591c3f9100411b45e265dbb68a3e7c6edb5b3a7f864e3ee?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="absolute h-full w-full object-cover object-center inset-0"
                  />{" "}
                  <div className="relative mix-blend-hue bg-indigo-600 z-[1] flex shrink-0 h-28 flex-col -mb-1" />
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="self-stretch max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
              <div className="flex-col fill-sky-400 overflow-hidden relative flex aspect-[1.4434389140271493] grow items-stretch pl-5 pr-8 py-12 max-md:mt-5 max-md:pr-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d8813a0e168d0a97d460f1dd2cf182ee3cc57844daf512ae9698af6aaede6c5?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                  className="absolute h-full w-full object-cover object-center inset-0"
                />{" "}
                <div className="relative text-black text-xl font-semibold leading-7 capitalize mt-3">
                  Control your payments
                </div>{" "}
                <div className="relative text-black text-base font-medium leading-6 mt-6">
                  Control and management of payment of all services with our
                  proper pricing subscriptions
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="flex-col fill-sky-400 overflow-hidden relative flex aspect-[1.4434389140271493] grow items-stretch px-7 py-12 max-md:mt-5 max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d8813a0e168d0a97d460f1dd2cf182ee3cc57844daf512ae9698af6aaede6c5?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                  className="absolute h-full w-full object-cover object-center inset-0"
                />{" "}
                <div className="relative text-black text-xl font-semibold leading-7 capitalize mt-2.5">
                  Fast communication
                </div>{" "}
                <div className="relative text-black text-base font-medium leading-6 mt-8 mb-1.5">
                  communication system for meeting appointments to get know what
                  the <br />
                  needs to be clear{" "}
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="flex-col fill-sky-400 overflow-hidden relative flex aspect-[1.4434389140271493] grow items-stretch pt-12 pb-7 px-7 max-md:mt-5 max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d8813a0e168d0a97d460f1dd2cf182ee3cc57844daf512ae9698af6aaede6c5?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                  className="absolute h-full w-full object-cover object-center inset-0"
                />{" "}
                <div className="relative text-black text-xl font-semibold leading-7 capitalize whitespace-nowrap mt-2.5">
                  Sky rocket your website
                </div>{" "}
                <div className="relative text-black text-base font-medium leading-6 mt-6">
                  Easy Management all features of you property. Members,
                  Tenants, Document, Accounting, Contract, Suppliers, Invoice
                  and all documents
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="flex-col fill-sky-400 overflow-hidden relative flex aspect-[1.4434389140271493] grow items-stretch pl-5 pr-12 pt-12 pb-7 max-md:mt-5 max-md:pr-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d8813a0e168d0a97d460f1dd2cf182ee3cc57844daf512ae9698af6aaede6c5?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                  className="absolute h-full w-full object-cover object-center inset-0"
                />{" "}
                <div className="relative text-black text-xl font-semibold leading-7 capitalize mt-3">
                  Adds on +
                </div>{" "}
                <div className="relative text-black text-base font-medium leading-6 mt-8">
                  Building Manager, Condominium Manager, Commercial Property
                  Manager, Apartment Manager, HOA Manager
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="text-violet-500 text-center text-lg font-semibold leading-7 self-center whitespace-nowrap mt-28 max-md:mt-10">
          Pricing Table
        </div>{" "}
        <div className="text-black text-5xl font-bold leading-[77px] tracking-tight self-center mt-8 max-md:max-w-full max-md:text-4xl max-md:leading-[75px]">
          <span className="text-violet-500">Best SEO</span>
        </div>{" "}
        <div className="text-gray-500 text-center text-xl leading-8 self-center mt-7 max-md:max-w-full">
          select the plan according to which meet your requirements in order to
          pop on the google first page
        </div>{" "}
        <span className="self-center flex w-[406px] max-w-full items-stretch justify-between gap-5 mt-14 max-md:mt-10">
          <div className="text-gray-500 text-center text-xl leading-8 my-auto">
            Pay Monthly{" "}
          </div>{" "}
          <div className="flex aspect-[1.85] flex-col justify-center items-stretch">
            <div className="bg-slate-950 bg-opacity-30 flex aspect-[1.85] flex-col justify-center items-stretch pl-1 pr-9 py-1 rounded-3xl max-md:pr-5">
              <div className="bg-white flex shrink-0 h-[33px] flex-col rounded-3xl" />
            </div>
          </div>{" "}
          <div className="text-gray-500 text-center text-xl leading-8 my-auto">
            Pay Yearly
          </div>
        </span>{" "}
        <span className="flex w-[189px] max-w-full gap-2 mr-80 mt-5 self-end items-start max-md:mr-2.5">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0319014f4ad93d448f6fd3d481b044b579438c99e1c46bfa6af8c2a841cae43c?apiKey=2bd386ac58de4a4f9e996607125fc961&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0319014f4ad93d448f6fd3d481b044b579438c99e1c46bfa6af8c2a841cae43c?apiKey=2bd386ac58de4a4f9e996607125fc961&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0319014f4ad93d448f6fd3d481b044b579438c99e1c46bfa6af8c2a841cae43c?apiKey=2bd386ac58de4a4f9e996607125fc961&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0319014f4ad93d448f6fd3d481b044b579438c99e1c46bfa6af8c2a841cae43c?apiKey=2bd386ac58de4a4f9e996607125fc961&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0319014f4ad93d448f6fd3d481b044b579438c99e1c46bfa6af8c2a841cae43c?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0319014f4ad93d448f6fd3d481b044b579438c99e1c46bfa6af8c2a841cae43c?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0319014f4ad93d448f6fd3d481b044b579438c99e1c46bfa6af8c2a841cae43c?apiKey=2bd386ac58de4a4f9e996607125fc961&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0319014f4ad93d448f6fd3d481b044b579438c99e1c46bfa6af8c2a841cae43c?apiKey=2bd386ac58de4a4f9e996607125fc961&"
            className="aspect-[2.06] object-contain object-center w-full stroke-[3.142px] stroke-violet-500 overflow-hidden shrink-0 flex-1"
          />{" "}
          <div className="text-violet-500 text-xl font-medium grow whitespace-nowrap mt-10 self-end">
            Save 25%
          </div>
        </span>
      </span>{" "}
      <div className="self-center w-full max-w-[1240px] mt-10 px-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <span className="items-stretch self-stretch shadow-2xl bg-white flex w-full grow flex-col mx-auto px-7 py-12 rounded-3xl max-md:mt-6 max-md:px-5">
              <div className="text-zinc-900 text-2xl font-bold whitespace-nowrap">
                Beginner
              </div>{" "}
              <div className="text-slate-500 text-lg whitespace-nowrap mt-3">
                Suitable for Individual
              </div>{" "}
              <span className="items-stretch flex justify-between gap-2.5 mt-5">
                <div className="text-zinc-900 text-6xl font-semibold max-md:text-4xl">
                  $299
                </div>{" "}
                <div className="text-slate-600 text-lg font-semibold my-auto">
                  / Month
                </div>
              </span>{" "}
              <span className="text-violet-500 text-center text-xl font-extrabold whitespace-nowrap justify-center items-center mt-6 px-16 py-3.5 rounded-[46.081px] border-[1.571px] border-solid border-violet-500 max-md:px-5">
                Buy Now
              </span>{" "}
              <span className="items-stretch flex justify-between gap-4 mt-11 max-md:mt-10">
                <div className="items-center bg-purple-100 flex aspect-square flex-col justify-center w-[34px] h-[34px] px-2.5 rounded-[104.73px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7bfbe23edfe6ce36376d0181046c8b43a18a2d22059375587f7aa8136b5f7c5?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="aspect-[0.94] object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="text-zinc-900 text-lg self-center grow whitespace-nowrap my-auto">
                  Site Audit
                </div>
              </span>{" "}
              <span className="items-stretch flex justify-between gap-4 mt-3">
                <div className="items-center bg-purple-100 flex aspect-square flex-col justify-center w-[34px] h-[34px] px-2.5 rounded-[104.73px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/18b1f138af5e1a3a809d7259c7ce5f5e8831c7c139276a48af701795c2aa1afe?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="aspect-[0.94] object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="text-zinc-900 text-lg self-center grow whitespace-nowrap my-auto">
                  Keyword Research
                </div>
              </span>{" "}
              <span className="items-stretch flex justify-between gap-4 mt-3">
                <div className="items-center bg-gray-50 flex aspect-square flex-col justify-center w-[34px] h-[34px] px-2.5 rounded-[104.73px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6abe6dfa4861ccf6d50759bca2f899a31a0a20882b34764afe78116a48d0acba?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="aspect-square object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="text-slate-400 text-lg self-center grow whitespace-nowrap my-auto">
                  Competition Research
                </div>
              </span>{" "}
              <span className="items-stretch flex justify-between gap-4 mt-3">
                <div className="items-center bg-gray-50 flex aspect-square flex-col justify-center w-[34px] h-[34px] px-2.5 rounded-[104.73px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4feeea7ed077daef7b679d4cd8552b33096256f650d3f3934325cd514cd0f2ba?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="aspect-square object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="text-slate-400 text-lg self-center grow whitespace-nowrap my-auto">
                  Blog Post
                </div>
              </span>{" "}
              <span className="items-stretch flex justify-between gap-4 mt-3">
                <div className="items-center bg-gray-50 flex aspect-square flex-col justify-center w-[34px] h-[34px] px-2.5 rounded-[104.73px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9c357c67c162d3b9dd8c012941233dcca67f03271e3663b0f7633359d4b3f97?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="aspect-square object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="text-slate-400 text-lg self-center grow whitespace-nowrap my-auto">
                  1 Da 30+ Guest Posts
                </div>
              </span>{" "}
              <span className="items-stretch flex justify-between gap-4 mt-3 mb-2">
                <div className="items-center bg-gray-50 flex aspect-square flex-col justify-center w-[34px] h-[34px] px-2.5 rounded-[104.73px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/673477befb0e2f84c0b449d85f0d58bc87ff871fc7f5b94227dd07fadffce089?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="aspect-[0.94] object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="text-slate-400 text-lg self-center grow whitespace-nowrap my-auto">
                  1 Da 30+ Link Insert
                </div>
              </span>
            </span>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-stretch self-stretch shadow-lg bg-violet-500 flex w-full grow flex-col mx-auto px-6 py-12 rounded-3xl max-md:mt-6 max-md:px-5">
              <div className="text-white text-2xl font-bold whitespace-nowrap">
                SMB & Local
              </div>{" "}
              <div className="text-gray-50 text-lg capitalize mt-3">
                Suitable For 3 members
              </div>{" "}
              <span className="items-stretch flex justify-between gap-2 mt-5">
                <div className="text-white text-6xl font-semibold max-md:text-4xl">
                  $499
                </div>{" "}
                <div className="text-gray-50 text-lg font-semibold my-auto">
                  / Month
                </div>
              </span>{" "}
              <span className="text-violet-500 text-center text-xl font-extrabold whitespace-nowrap justify-center items-center bg-white mt-6 px-16 py-3.5 rounded-[46.081px] max-md:px-5">
                Buy Now
              </span>{" "}
              <span className="items-stretch flex justify-between gap-5 mt-11 max-md:mt-10">
                <div className="items-center bg-white flex aspect-[0.9705882352941176] flex-col justify-center w-[34px] h-[34px] px-2 rounded-[104.73px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/171c15e55c1c9a19949aa0c0e3c89247660f75266b2a2f50f568a8286b814df7?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="aspect-square object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="text-white text-lg self-center grow whitespace-nowrap my-auto">
                  Site Audit
                </div>
              </span>{" "}
              <span className="items-stretch flex justify-between gap-5 mt-3">
                <div className="items-center bg-white flex aspect-[0.9705882352941176] flex-col justify-center w-[34px] h-[34px] px-2 rounded-[104.73px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/498a66d58fd728243def5cb249a83227492c3232dfe8d0509b1fa550a44e8ea1?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="aspect-square object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="text-white text-lg self-center grow whitespace-nowrap my-auto">
                  Keyword Research
                </div>
              </span>{" "}
              <span className="items-stretch flex justify-between gap-5 mt-3">
                <div className="items-center bg-white flex aspect-[0.9705882352941176] flex-col justify-center w-[34px] h-[34px] px-2 rounded-[104.73px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/19d24553121a83262494f34971a86301a4a192e0adb5e788f2f48d314be0952c?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="aspect-[1.06] object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="text-white text-lg self-center grow whitespace-nowrap my-auto">
                  Competition Research
                </div>
              </span>{" "}
              <span className="items-stretch flex justify-between gap-5 mt-3">
                <div className="items-center bg-white flex aspect-[0.9705882352941176] flex-col justify-center w-[34px] h-[34px] px-2 rounded-[104.73px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/81f72ae44bc2579c5184c8c1dac6ce96c8112f25e54ca91915d2f0c443a359cf?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="aspect-[1.06] object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="text-white text-lg self-center grow whitespace-nowrap my-auto">
                  Blog Post
                </div>
              </span>{" "}
              <span className="items-stretch flex justify-between gap-5 mt-3">
                <div className="items-center bg-gray-50 flex aspect-[0.9705882352941176] flex-col justify-center w-[34px] h-[34px] px-2 rounded-[104.73px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ec8d98c8e70b404902d16262b9f83622bf5f6ecc4cbeaab8dfb492fdfc13346?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="aspect-[1.06] object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="text-white text-lg self-center grow whitespace-nowrap my-auto">
                  1 Da 30+ Guest Posts
                </div>
              </span>{" "}
              <span className="items-stretch flex justify-between gap-5 mt-3 mb-2">
                <div className="items-center bg-gray-50 flex aspect-[0.9705882352941176] flex-col justify-center w-[34px] h-[34px] px-2 rounded-[104.73px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/75fbe7dbe36099cb39c10610885d7c06bfafbbdcad029039ee16b618375d02ce?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="aspect-square object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="text-white text-lg self-center grow whitespace-nowrap my-auto">
                  1 Da 30+ Link Insert
                </div>
              </span>
            </span>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-stretch self-stretch shadow-2xl bg-white flex w-full grow flex-col mx-auto px-7 py-12 rounded-3xl max-md:mt-6 max-md:px-5">
              <div className="text-zinc-900 text-2xl font-bold whitespace-nowrap">
                High Growth
              </div>{" "}
              <div className="text-slate-500 text-lg capitalize mt-3">
                Suitable for Team corporation
              </div>{" "}
              <span className="items-stretch flex justify-between gap-2 mt-5">
                <div className="text-zinc-900 text-6xl font-semibold grow shrink basis-auto max-md:text-4xl">
                  $1999
                </div>{" "}
                <div className="text-slate-600 text-lg font-semibold self-center whitespace-nowrap my-auto">
                  / Month
                </div>
              </span>{" "}
              <span className="text-violet-500 text-center text-xl font-extrabold whitespace-nowrap justify-center items-center mt-6 px-16 py-3.5 rounded-[35.608px] border-[1.571px] border-solid border-violet-500 max-md:px-5">
                Buy Now
              </span>{" "}
              <span className="items-stretch flex justify-between gap-5 mt-11 max-md:mt-10">
                <div className="items-center bg-purple-100 flex aspect-[0.9705882352941176] flex-col justify-center w-[34px] h-[34px] px-2 rounded-[104.73px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/33e7e8010f646278699c2b5c540d89554444b562069e3063f12ff407fafbb280?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="aspect-square object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="text-black text-lg self-center grow whitespace-nowrap my-auto">
                  Site Audit
                </div>
              </span>{" "}
              <span className="items-stretch flex justify-between gap-5 mt-3">
                <div className="items-center bg-purple-100 flex aspect-[0.9705882352941176] flex-col justify-center w-[34px] h-[34px] px-2 rounded-[104.73px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8161da9b1b55c0af8e0b76078d54e32a531091d72650fd6327a39ba9f8fc7960?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="aspect-square object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="text-black text-lg self-center grow whitespace-nowrap my-auto">
                  Keyword Research
                </div>
              </span>{" "}
              <span className="items-stretch flex justify-between gap-5 mt-3">
                <div className="items-center bg-purple-100 flex aspect-[0.9705882352941176] flex-col justify-center w-[34px] h-[34px] px-2 rounded-[104.73px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8256546fed4b33c4d6cfa7ac9f3efbbbb6fcee7a0c7c704e8d3356e4ad5b22e?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="aspect-[1.06] object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="text-black text-lg self-center grow whitespace-nowrap my-auto">
                  Competition Research
                </div>
              </span>{" "}
              <span className="items-stretch flex justify-between gap-5 mt-3">
                <div className="items-center bg-purple-100 flex aspect-[0.9705882352941176] flex-col justify-center w-[34px] h-[34px] px-2 rounded-[104.73px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/88952c0e0d5153d4b40d106eb52c0f4b26bc1d7fb61e689b8deb63d108652119?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="aspect-[1.06] object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="text-black text-lg self-center grow whitespace-nowrap my-auto">
                  Blog Post
                </div>
              </span>{" "}
              <span className="items-stretch flex justify-between gap-5 mt-3">
                <div className="items-center bg-purple-100 flex aspect-[0.9705882352941176] flex-col justify-center w-[34px] h-[34px] px-2 rounded-[104.73px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b238f9a05d9e28c5a482715731cdb9ff0ce27f128efe0d0ea673b0703faba064?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="aspect-[1.06] object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="text-black text-lg self-center grow whitespace-nowrap my-auto">
                  1 Da 30+ Guest Posts
                </div>
              </span>{" "}
              <span className="items-stretch flex justify-between gap-5 mt-3 mb-2">
                <div className="items-center bg-purple-100 flex aspect-[0.9705882352941176] flex-col justify-center w-[34px] h-[34px] px-2 rounded-[104.73px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bee25cac5c93c04b5b142c2b861bec23c3c9d1cf22c759d6d839b608d67fc598?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="aspect-square object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="text-black text-lg self-center grow whitespace-nowrap my-auto">
                  1 Da 30+ Link Insert
                </div>
              </span>
            </span>
          </div>
        </div>
      </div>{" "}
      <div className="self-center w-full max-w-[1240px] mt-32 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/beb988ad3289c0a111cf4fa947e9290c72dc629eadb102833630f8208a10bf53?apiKey=2bd386ac58de4a4f9e996607125fc961&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/beb988ad3289c0a111cf4fa947e9290c72dc629eadb102833630f8208a10bf53?apiKey=2bd386ac58de4a4f9e996607125fc961&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/beb988ad3289c0a111cf4fa947e9290c72dc629eadb102833630f8208a10bf53?apiKey=2bd386ac58de4a4f9e996607125fc961&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/beb988ad3289c0a111cf4fa947e9290c72dc629eadb102833630f8208a10bf53?apiKey=2bd386ac58de4a4f9e996607125fc961&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/beb988ad3289c0a111cf4fa947e9290c72dc629eadb102833630f8208a10bf53?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/beb988ad3289c0a111cf4fa947e9290c72dc629eadb102833630f8208a10bf53?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/beb988ad3289c0a111cf4fa947e9290c72dc629eadb102833630f8208a10bf53?apiKey=2bd386ac58de4a4f9e996607125fc961&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/beb988ad3289c0a111cf4fa947e9290c72dc629eadb102833630f8208a10bf53?apiKey=2bd386ac58de4a4f9e996607125fc961&"
              className="aspect-[1.09] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10"
            />
          </div>{" "}
          <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
            <span className="flex grow flex-col items-stretch mt-28 px-5 max-md:max-w-full max-md:mt-10">
              <div className="text-violet-500 text-5xl font-bold leading-[72px] tracking-tight capitalize max-md:max-w-full max-md:text-4xl max-md:leading-[70px]">
                <div _text="" />
              </div>{" "}
              <div className="text-black text-2xl leading-10 mt-12 max-md:max-w-full max-md:mt-10">
                This is due to their excellent service, competitive pricing and
                customer support. It’s throughly refresing to get such a
                personal touch. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur
              </div>{" "}
              <span className="flex justify-between gap-5 mt-11 pr-5 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                <div className="text-violet-500 text-xl font-bold leading-6 tracking-normal capitalize mt-2">
                  Delila Rayam
                </div>{" "}
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/29b87045171e2cc0630a9ff8e71d861ba5f56e01ad313b5b16b6edb8ecf28671?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                  className="aspect-[4.25] object-contain object-center w-[85px] overflow-hidden shrink-0 max-w-full"
                />
              </span>
            </span>
          </div>
        </div>
      </div>{" "}
      <div className="text-violet-500 text-5xl font-bold leading-[71.7px] tracking-tight capitalize self-center whitespace-nowrap mt-44 max-md:text-4xl max-md:leading-[70px] max-md:mt-10">
        Adds<span className="text-violet-500"> on</span>
      </div>{" "}
      <div className="self-center w-[895px] max-w-full mt-20 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
            <span className="items-start shadow-2xl bg-white flex w-full grow flex-col mx-auto pt-11 pb-5 px-6 rounded-3xl max-md:mt-10 max-md:px-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/14e711a0df51c60173d2f8e6c90f00c0a09807315a10e92d3480b72fb145a3b0?apiKey=2bd386ac58de4a4f9e996607125fc961&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/14e711a0df51c60173d2f8e6c90f00c0a09807315a10e92d3480b72fb145a3b0?apiKey=2bd386ac58de4a4f9e996607125fc961&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14e711a0df51c60173d2f8e6c90f00c0a09807315a10e92d3480b72fb145a3b0?apiKey=2bd386ac58de4a4f9e996607125fc961&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/14e711a0df51c60173d2f8e6c90f00c0a09807315a10e92d3480b72fb145a3b0?apiKey=2bd386ac58de4a4f9e996607125fc961&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/14e711a0df51c60173d2f8e6c90f00c0a09807315a10e92d3480b72fb145a3b0?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14e711a0df51c60173d2f8e6c90f00c0a09807315a10e92d3480b72fb145a3b0?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/14e711a0df51c60173d2f8e6c90f00c0a09807315a10e92d3480b72fb145a3b0?apiKey=2bd386ac58de4a4f9e996607125fc961&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/14e711a0df51c60173d2f8e6c90f00c0a09807315a10e92d3480b72fb145a3b0?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                className="aspect-[0.99] object-contain object-center w-28 overflow-hidden max-w-full self-start"
              />{" "}
              <div className="self-stretch text-zinc-900 text-2xl font-bold whitespace-nowrap mt-11 max-md:mt-10">
                Email Marketing
              </div>{" "}
              <div className="text-slate-500 text-lg capitalize self-stretch mt-3">
                Suitable for Team corporation
              </div>{" "}
              <span className="items-stretch self-stretch flex justify-between gap-2.5 mt-5">
                <div className="text-zinc-900 text-6xl font-semibold max-md:text-4xl">
                  $99
                </div>{" "}
                <div className="text-slate-600 text-lg font-semibold my-auto">
                  / One time
                </div>
              </span>{" "}
              <span className="text-violet-500 text-center text-xl font-extrabold whitespace-nowrap justify-center items-center self-stretch mt-6 px-16 py-3.5 rounded-[35.608px] border-[1.571px] border-solid border-violet-500 max-md:px-5">
                Buy Now
              </span>{" "}
              <span className="items-stretch self-stretch flex justify-between gap-4 mt-11 max-md:mt-10">
                <div className="items-center bg-purple-100 flex aspect-[1.0303030303030303] flex-col justify-center w-[34px] h-[34px] px-2.5 rounded-[104.73px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c97d00db25de6f9604c1112a7722a8b93da0b5e0ff028daa0f2e49bc9adb097?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="aspect-[0.94] object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="text-black text-lg self-center grow whitespace-nowrap my-auto">
                  Site Audit
                </div>
              </span>{" "}
              <span className="items-stretch self-stretch flex justify-between gap-4 mt-3.5">
                <div className="items-center bg-purple-100 flex aspect-[1.0303030303030303] flex-col justify-center w-[34px] h-[34px] px-2.5 rounded-[104.73px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/477c816e182f1cfad7d96a517a662c35509d2ccf337365bb027383d9b02e5810?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="aspect-[0.94] object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="text-black text-lg self-center grow whitespace-nowrap my-auto">
                  Keyword Research
                </div>
              </span>{" "}
              <span className="items-stretch self-stretch flex justify-between gap-4 mt-3.5">
                <div className="items-center bg-purple-100 flex aspect-square flex-col justify-center w-[34px] h-[34px] px-2.5 rounded-[104.73px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cefe29243b7dbe49dc9d7a8674640f67fb15ab01ae47222d77e547c8a26294e?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="aspect-[0.94] object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="text-black text-lg self-center grow whitespace-nowrap my-auto">
                  Competition Research
                </div>
              </span>{" "}
              <span className="items-stretch self-stretch flex justify-between gap-4 mt-3">
                <div className="items-center bg-purple-100 flex aspect-square flex-col justify-center w-[34px] h-[34px] px-2.5 rounded-[104.73px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/952da1dac3610b7d1b9031082389e87606f0a6e5c5f5812e7b04aca0dc3756fa?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="aspect-square object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="text-black text-lg self-center grow whitespace-nowrap my-auto">
                  Blog Post
                </div>
              </span>{" "}
              <span className="items-stretch self-stretch flex justify-between gap-4 mt-3">
                <div className="items-center bg-purple-100 flex aspect-square flex-col justify-center w-[34px] h-[34px] px-2.5 rounded-[104.73px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e8f0bfeb1cefd30ce5e24a7bdfca1f958aa8c144823ae75f2c3fa3357682acb?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="aspect-square object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="text-black text-lg self-center grow whitespace-nowrap my-auto">
                  1 Da 30+ Guest Posts
                </div>
              </span>{" "}
              <span className="items-stretch self-stretch flex justify-between gap-4 mt-3">
                <div className="items-center bg-purple-100 flex aspect-square flex-col justify-center w-[34px] h-[34px] px-2.5 rounded-[104.73px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ea2eb458625fe1441be4aaef2ea376efd401c8fa355c3bfe173ed9d22ca5212?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="aspect-square object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="text-black text-lg self-center grow whitespace-nowrap my-auto">
                  1 Da 30+ Link Insert
                </div>
              </span>
            </span>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
            <span className="items-start shadow-2xl bg-white flex w-full grow flex-col mx-auto px-6 py-9 rounded-3xl max-md:mt-10 max-md:px-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/75eb74fe21a23ee2b04891f5d912ff6457709aa1a54b0531f2cd8f627282b192?apiKey=2bd386ac58de4a4f9e996607125fc961&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/75eb74fe21a23ee2b04891f5d912ff6457709aa1a54b0531f2cd8f627282b192?apiKey=2bd386ac58de4a4f9e996607125fc961&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/75eb74fe21a23ee2b04891f5d912ff6457709aa1a54b0531f2cd8f627282b192?apiKey=2bd386ac58de4a4f9e996607125fc961&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/75eb74fe21a23ee2b04891f5d912ff6457709aa1a54b0531f2cd8f627282b192?apiKey=2bd386ac58de4a4f9e996607125fc961&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/75eb74fe21a23ee2b04891f5d912ff6457709aa1a54b0531f2cd8f627282b192?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/75eb74fe21a23ee2b04891f5d912ff6457709aa1a54b0531f2cd8f627282b192?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/75eb74fe21a23ee2b04891f5d912ff6457709aa1a54b0531f2cd8f627282b192?apiKey=2bd386ac58de4a4f9e996607125fc961&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/75eb74fe21a23ee2b04891f5d912ff6457709aa1a54b0531f2cd8f627282b192?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                className="aspect-[1.01] object-contain object-center w-[105px] overflow-hidden max-w-full self-start"
              />{" "}
              <div className="self-stretch text-zinc-900 text-2xl font-bold whitespace-nowrap mt-11 max-md:mt-10">
                Wordpress Optimization
              </div>{" "}
              <div className="text-slate-500 text-lg capitalize self-stretch mt-3">
                Suitable for Team corporation
              </div>{" "}
              <span className="items-stretch self-stretch flex justify-between gap-2.5 mt-5">
                <div className="text-zinc-900 text-6xl font-semibold max-md:text-4xl">
                  $199
                </div>{" "}
                <div className="text-slate-600 text-lg font-semibold my-auto">
                  / One time
                </div>
              </span>{" "}
              <span className="text-violet-500 text-center text-xl font-extrabold whitespace-nowrap justify-center items-center self-stretch mt-6 px-16 py-3.5 rounded-[35.608px] border-[1.571px] border-solid border-violet-500 max-md:px-5">
                Buy Now
              </span>{" "}
              <span className="items-stretch self-stretch flex justify-between gap-4 mt-11 max-md:mt-10">
                <div className="items-center bg-purple-100 flex aspect-[1.0303030303030303] flex-col justify-center w-[34px] h-[34px] px-2.5 rounded-[104.73px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6542847f1b0255dfc4b9f3a43292f9eb49cbbfba6ed4ca2c4efb1db3865153f?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="aspect-[0.94] object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="text-black text-lg self-center grow whitespace-nowrap my-auto">
                  Site Audit
                </div>
              </span>{" "}
              <span className="items-stretch self-stretch flex justify-between gap-4 mt-3.5">
                <div className="items-center bg-purple-100 flex aspect-[1.0303030303030303] flex-col justify-center w-[34px] h-[34px] px-2.5 rounded-[104.73px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/33fd99010e4fe11e6af4feaf8ffc87d35610bcc26fcfd14907e57a3d5841d1e9?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="aspect-[0.94] object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="text-black text-lg self-center grow whitespace-nowrap my-auto">
                  Keyword Research
                </div>
              </span>{" "}
              <span className="items-stretch self-stretch flex justify-between gap-4 mt-3.5">
                <div className="items-center bg-purple-100 flex aspect-square flex-col justify-center w-[34px] h-[34px] px-2.5 rounded-[104.73px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/54069067469009c8352194371f794fddb098b200535863c79105a4ffb2fb99dc?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="aspect-[0.94] object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="text-black text-lg self-center grow whitespace-nowrap my-auto">
                  Competition Research
                </div>
              </span>{" "}
              <span className="items-stretch self-stretch flex justify-between gap-4 mt-3">
                <div className="items-center bg-purple-100 flex aspect-square flex-col justify-center w-[34px] h-[34px] px-2.5 rounded-[104.73px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b75fcf29469722258592087dce1c91f876f8c6ca44809a66b41c39733eb2e2b1?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="aspect-square object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="text-black text-lg self-center grow whitespace-nowrap my-auto">
                  Blog Post
                </div>
              </span>{" "}
              <span className="items-stretch self-stretch flex justify-between gap-4 mt-3">
                <div className="items-center bg-purple-100 flex aspect-square flex-col justify-center w-[34px] h-[34px] px-2.5 rounded-[104.73px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/93d336aa9d9b9ea4c1c093e9588e62c9255654b8d599aeadea48413294c6f198?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="aspect-square object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="text-black text-lg self-center grow whitespace-nowrap my-auto">
                  1 Da 30+ Guest Posts
                </div>
              </span>{" "}
              <span className="items-stretch self-stretch flex justify-between gap-4 mt-3">
                <div className="items-center bg-purple-100 flex aspect-square flex-col justify-center w-[34px] h-[34px] px-2.5 rounded-[104.73px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/315eeba417854a2d87c30a270d5cc1b1656ddebf23fbcc8eb1937106b80ec02b?apiKey=2bd386ac58de4a4f9e996607125fc961&"
                    className="aspect-square object-contain object-center w-full overflow-hidden"
                  />
                </div>{" "}
                <div className="text-black text-lg self-center grow whitespace-nowrap my-auto">
                  1 Da 30+ Link Insert
                </div>
              </span>
            </span>
          </div>
        </div>
      </div>{" "}
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/445d4d4ce7d34a65eab1563d245629aea077ae7d70869fc6f09a02955e77eeae?apiKey=2bd386ac58de4a4f9e996607125fc961&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/445d4d4ce7d34a65eab1563d245629aea077ae7d70869fc6f09a02955e77eeae?apiKey=2bd386ac58de4a4f9e996607125fc961&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/445d4d4ce7d34a65eab1563d245629aea077ae7d70869fc6f09a02955e77eeae?apiKey=2bd386ac58de4a4f9e996607125fc961&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/445d4d4ce7d34a65eab1563d245629aea077ae7d70869fc6f09a02955e77eeae?apiKey=2bd386ac58de4a4f9e996607125fc961&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/445d4d4ce7d34a65eab1563d245629aea077ae7d70869fc6f09a02955e77eeae?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/445d4d4ce7d34a65eab1563d245629aea077ae7d70869fc6f09a02955e77eeae?apiKey=2bd386ac58de4a4f9e996607125fc961&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/445d4d4ce7d34a65eab1563d245629aea077ae7d70869fc6f09a02955e77eeae?apiKey=2bd386ac58de4a4f9e996607125fc961&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/445d4d4ce7d34a65eab1563d245629aea077ae7d70869fc6f09a02955e77eeae?apiKey=2bd386ac58de4a4f9e996607125fc961&"
        className="aspect-[1.51] object-contain object-center w-full overflow-hidden self-stretch mt-8 max-md:max-w-full"
      />{" "}
      <div className="self-center z-[1] flex w-full max-w-[1136px] justify-between gap-5 items-end max-md:max-w-full max-md:flex-wrap">
        <span className="flex flex-col mt-8 px-5 items-start">
          <div className="text-black text-sm capitalize self-stretch">
            ara a lorem ipsum dolor sit amet, consectetur adipiscing sed do
            eiusmod tempor incididunt ut labore exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat
            <br /> ara a lorem ipsum dolor sit amet, consectetur adipiscing sed
            do eiusmod tempor incididunt ut labore exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat
          </div>{" "}
          <div className="text-black text-center text-sm capitalize self-stretch mt-8">
            Registeration : 4030396188
          </div>{" "}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8a97db05958082653bb127700be7ba402d547406410be66e7a7bc01fd4f6ff8?apiKey=2bd386ac58de4a4f9e996607125fc961&"
            className="aspect-[14.26] object-contain object-center w-[385px] overflow-hidden mt-6"
          />
        </span>{" "}
        <div className="self-start">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[74%] max-md:w-full max-md:ml-0">
              <span className="flex grow flex-col items-stretch px-5 max-md:mt-10">
                <div className="text-black text-lg font-bold capitalize">
                  Get In touch
                </div>{" "}
                <div className="text-black text-base font-medium capitalize mt-9">
                  855 road, broklyn street new york 600
                </div>{" "}
                <div className="text-black text-base font-medium capitalize mt-12 max-md:mt-10">
                  888 999 0000
                </div>{" "}
                <div className="text-black text-base font-medium lowercase whitespace-nowrap mt-11 max-md:mt-10">
                  needhelp@spearheadseo.com
                </div>
              </span>
            </div>{" "}
            <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
              <span className="flex flex-col items-stretch px-5 max-md:mt-10">
                <div className="text-black text-lg font-bold capitalize whitespace-nowrap">
                  Quick Links
                </div>{" "}
                <div className="text-black text-base capitalize mt-9">Home</div>{" "}
                <div className="text-black text-base capitalize whitespace-nowrap mt-9">
                  Services
                </div>{" "}
                <div className="text-black text-base capitalize whitespace-nowrap mt-9">
                  packages
                </div>{" "}
                <div className="text-black text-base capitalize whitespace-nowrap mt-8">
                  Contact Us
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>{" "}
      <span className="text-white text-sm font-semibold capitalize whitespace-nowrap bg-violet-500 self-stretch w-full justify-center items-center mt-12 px-16 py-4 border-[0.122px] border-solid border-stone-300 max-md:max-w-full max-md:mt-10 max-md:px-5">
        PlateMateAI (C) 2024. All Rights Reserved.
      </span>
    </main>
  );
}
