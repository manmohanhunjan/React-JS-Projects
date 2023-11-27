import { useState, useEffect } from "react";

function App() {
  const [proTitle, setProTitle] = useState("");
  const [input, setInput] = useState("");
  const [productImage, setProductImage] = useState("");
  const [proPrice, setProPrice] = useState("");
  const [proAvaliable, setProAvaliable] = useState(false);

  const getProducts = async () => {
    const response = await fetch(
      `https://www.google.com/search?q=${input}&tbm=shop`
    );
    const html = await response.text();
    console.log("html", html);

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const productTitle = doc.querySelector(".sh-np__product-title");

    const productImage = doc.querySelector(".sh-np__click-target img");
    console.log("productImage", productImage);
    const productPrice = doc.querySelector(".T14wmb");
    console.log("price", productPrice);

    // const productTitleContainer = productTitle
    //   ? productTitle.textContent
    //   : `No shopping ads found for: ${input}`;
    let productTitleContainer = "";
    if (productTitle) {
      productTitleContainer = productTitle.textContent;
      setProAvaliable(true);
    } else {
      productTitleContainer = `No shopping ads found for: ${input}`;
      setProAvaliable(false);
    }

    const productPriceContainer = productPrice ? productPrice.textContent : ``;

    const productImageContainer = productImage ? productImage.src : ``;

    setProTitle(productTitleContainer);
    setProductImage(productImageContainer);
    setProPrice(productPriceContainer);

    setInput("");

    return { proTitle, productImage, proPrice };
  };

  const testToSpeech = () => {
    // const text = `The price of ${proTitle} is ${proPrice}`;
    if (!proAvaliable) {
      var text = proTitle;
    } else {
      text = `The price of ${proTitle} is ${proPrice}`;
    }
    const msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  };

  useEffect(() => {
    testToSpeech();
  }, [proTitle]);

  return (
    <>
      {/* Top left */}
      <div className="flex flex-col items-center justify-center pt-4 bg-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="flex font-sans">
          <h3>
            Before you start, please make sure you have <b>CORS Unblocked</b>{" "}
            Chrome Extension installed and enabled.
          </h3>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen pb-6 bg-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="flex font-sans">
          <div className="flex-none w-48 relative">
            {productImage && (
              <img
                src={productImage}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            )}
          </div>
          <div className="flex-auto p-6">
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-lg font-semibold text-slate-900">
                {proTitle}
              </h1>
              <div className="text-lg font-semibold text-slate-500 ">
                <h2>{proPrice}</h2>
              </div>
            </div>
            <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
              <div className="space-x-2 flex text-sm">
                <input
                  onChange={(e) => setInput(e.target.value)}
                  className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-3 ring-1 ring-slate-200 shadow-sm"
                  type="text"
                  value={input}
                  placeholder="Enter Product Name..."
                />
              </div>
            </div>
            <div className="flex space-x-4 mb-6 text-sm font-medium">
              <div className="flex-auto flex space-x-4">
                <button
                  className="h-10 px-6 font-semibold rounded-md bg-black text-white"
                  onClick={getProducts}
                >
                  Search Product
                </button>
              </div>
            </div>
            {proPrice && (
              <p className="text-sm text-slate-700">
                The price of {proTitle} is {proPrice}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
