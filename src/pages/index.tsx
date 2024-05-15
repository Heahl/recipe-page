import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Recipe Page</title>
        <meta name="description" content="Recipe Page" />
        <link rel="icon" href="/assets/images/favicon-32x32.png" />
      </Head>
      <main className="bg-eggshell flex min-h-screen flex-col items-center justify-center">
        {/* Recipe Container */}
        <div className="my-20 flex flex-col gap-8 rounded-xl bg-white p-8 md:w-[75%]">
          {/* Image */}
          <Image
            className="w-full rounded-xl"
            src="/assets/images/image-omelette.jpeg"
            width={100}
            height={100}
            alt="Image of an Omelette"
          />
          {/* Header */}
          <h1 className="font-young-serif text-4xl font-semibold tracking-wide">
            Simple Omelette Recipe
          </h1>
          {/* Description */}
          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          {/* Preparation Time Container */}
          <div className="bg-rose-white rounded-xl p-6">
            <h3 className="text-primary-dark-raspberry mb-4 text-lg font-semibold">
              Preparation time
            </h3>
            <ul className="list-inside list-disc space-y-2 pl-2">
              <li>
                <span className="pl-2">
                  <strong>Total:</strong> Approximately 10 minutes
                </span>
              </li>
              <li>
                <span className="pl-2">
                  <strong>Preparation:</strong> 5 minutes
                </span>
              </li>
              <li>
                <span className="pl-2">
                  <strong>Cooking:</strong> 5 minutes
                </span>
              </li>
            </ul>
          </div>
          {/* Ingredients Container */}
          <div className="border-b-2 pb-6">
            <h2 className="text-primary-nutmeg font-young-serif mb-4 text-2xl">
              Ingredients
            </h2>
            <ul className="list-inside list-disc space-y-2 pl-2">
              <li>
                <span className="pl-2">2-3 large eggs</span>
              </li>
              <li>
                <span className="pl-2">Salt, to taste</span>
              </li>
              <li>
                <span className="pl-2">Pepper, to taste</span>
              </li>
              <li>
                <span className="pl-2">1 tablespoon of butter or oil</span>
              </li>
              <li>
                &nbsp;&nbsp;Optional fillings: cheese, diced vegetables, cooked
                meats, herbs
              </li>
            </ul>
          </div>
          {/* Instructions Container */}
          <div className="border-b-2 pb-6">
            <h2 className="text-primary-nutmeg font-young-serif mb-4 text-2xl">
              Instructions
            </h2>
            <div className="grid grid-cols-12 gap-4">
              <p className="text-primary-nutmeg col-span-1 pl-2 font-semibold">
                1.
              </p>
              <p className="col-span-11 -translate-x-2 font-light text-black">
                <strong>Beat the eggs:</strong> In a bowl, beat the eggs with a
                pinch of salt and pepper until they are well mixed. You can add
                a tablespoon of water or milk for a fluffier texture.
              </p>
              <p className="text-primary-nutmeg col-span-1 pl-2 font-semibold">
                2.
              </p>
              <p className="col-span-11 -translate-x-2 font-light text-black">
                <strong> Heat the pan:</strong> Place a non-stick frying pan
                over medium heat and add butter or oil.
              </p>
              <p className="text-primary-nutmeg col-span-1 pl-2 font-semibold">
                3.
              </p>
              <p className="col-span-11 -translate-x-2 font-light text-black">
                <strong>Cook the omelette:</strong> Once the butter is melted
                and bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                evenly coat the surface.
              </p>
              <p className="text-primary-nutmeg col-span-1 pl-2 font-semibold">
                4.
              </p>
              <p className="col-span-11 -translate-x-2 font-light text-black">
                <strong>Add fillings (optional):</strong> When the eggs begin to
                set at the edges but are still slightly runny in the middle,
                sprinkle your chosen fillings over one half of the omelette.
              </p>
              <p className="text-primary-nutmeg col-span-1 pl-2 font-semibold">
                5.
              </p>
              <p className="col-span-11 -translate-x-2 font-light text-black">
                <strong>Fold and serve:</strong> As the omelette continues to
                cook, carefully lift one edge and fold it over the fillings. Let
                it cook for another minute, then slide it onto a plate.
              </p>
              <p className="text-primary-nutmeg col-span-1 pl-2 font-semibold">
                6.
              </p>
              <p className="col-span-11 -translate-x-2 font-light text-black">
                <strong>Enjoy:</strong> Serve hot, with additional salt and
                pepper if needed.
              </p>
            </div>
          </div>
          {/* Nutrition Container */}
          <div className="flex flex-col gap-4">
            <h2 className="text-primary-nutmeg font-young-serif text-2xl">
              Nutrition
            </h2>
            <p className="mb-1">
              Nutrition The table below shows nutritional values per serving
              without the additional fillings.
            </p>
            {/* Nutrition Grid */}
            <div className="grid grid-cols-2 grid-rows-4">
              <div className="mb-2 border-b-2 pb-2 pl-10">Calories</div>
              <div className="text-primary-nutmeg mb-2 border-b-2 pb-2 font-semibold">
                277kcal
              </div>
              <div className="mb-2 border-b-2 pb-2 pl-10">Carbs</div>
              <div className="text-primary-nutmeg mb-2 border-b-2 pb-2 font-semibold">
                0g
              </div>
              <div className="mb-2 border-b-2 pb-2 pl-10">Protein</div>
              <div className="text-primary-nutmeg mb-2 border-b-2 pb-2 font-semibold">
                20g
              </div>
              <div className="mb-2 border-b-2 pb-2 pl-10">Fat</div>
              <div className="text-primary-nutmeg mb-2 border-b-2 pb-2 font-semibold">
                22g
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
