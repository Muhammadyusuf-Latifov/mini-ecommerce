import { memo } from 'react';

const User = () => {
  return (
    <div className="User">
      <h2 className='text-[30px]'>User</h2>
      <table className="w-full border border-collapse rounded-lg overflow-hidden mt-[26px]">
        <thead className="thead border rounded-2xl bg-[#262639] text-white ">
          <tr className="text-left ">
            <th className="py-[20px] pl-[12px] ">N</th>
            <th className="py-[20px]  ">Full name</th>
            <th className="py-[20px]  ">Email</th>
            <th className="py-[20px]  ">Image</th>
            <th className="py-[20px]  ">Status</th>
          
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[#ddd]">
            <td className="pl-[10px] ">zor</td>
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

export default memo(User);