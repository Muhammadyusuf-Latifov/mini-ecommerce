import { memo } from "react";

const Product = () => {
  return (
    <div className="Product overflow-y-auto">
      <h2 className="text-[30px]">Products</h2>
      <table className="w-full border border-collapse rounded-lg overflow-hidden mt-[26px]">
        <thead className="thead border rounded-2xl bg-slate-900 text-white ">
          <tr className="text-left ">
            <th className="py-[20px] pl-[12px] w-[7%]">N</th>
            <th className="py-[20px]  w-[10%]">Title</th>
            <th className="py-[20px]  w-[15%]">Description</th>
            <th className="py-[20px]  w-[10%]">Price</th>
            <th className="py-[20px]  w-[13%]">Category</th>
            <th className="py-[20px]  w-[12%]">Images</th>
            <th className="py-[20px]  w-[10%]">Stock</th>
            <th className="py-[20px]  w-[10%]">Brand</th>
            <th className="py-[20px]  w-[5%]">•••</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[#ddd]">
            <td className="pl-[10px] ">zor</td>
            <td>info</td>
            <td>info</td>
            <td>info</td>
            <td>info</td>
            <td>info</td>
            <td>info</td>
            <td>info</td>
            <td>info</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default memo(Product);
