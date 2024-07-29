

// const items = [
//   { image: 'https://imgs.search.brave.com/H_FKK0H3HkVy8FCnOFt27gKQmsHmsDNL_NR0vy_1n_A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTEx/Mzc4OTY0L3Bob3Rv/L3ZlZ2V0YWJsZS1i/YXNrZXQuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPWZNbjYw/V3J0NzVsZ2JJOFFN/NTJYa19PQWdQNGQ0/THkxUzJWMXpiNkg2/TjA9',
//      label: 'Fresh Fruits & Vegetables' , className:"bg-green-300" },
//   { image: 'path/to/image2', label: 'Cooking Oil & Ghee' },
//   { image: 'path/to/image3', label: 'Meat & Fish' },
//   { image: 'path/to/image4', label: 'Bakery & Snacks' },
//   { image: 'path/to/image5', label: 'Dairy & Eggs' },
//   { image: 'path/to/image6', label: 'Beverages' },
// ];

// const Content = () => {
//   return (
//     <div className="grid grid-cols-2 gap-4 p-6">
//       {items.map((item, index) => (
//         <div key={index} className="w-44 h-48 bg-gray-100 rounded-lg flex flex-col items-center justify-center">
//           <img src={item.image} alt={item.label} className="w-24 h-18 mb-2" />
//           <span className="text-center text-sm">{item.label}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Content;





  
  const Content = () => {
    return (
      <div className="grid grid-cols-2 gap-4 p-6">
      
          <div  className="w-44 h-48 bg-[#53B1751A] rounded-lg flex flex-col items-center justify-center">
            <img src="https://s3-alpha-sig.figma.com/img/ca51/c56f/c6c319bfab3990da934ed0eb9c5ae3e7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M5-Wj9U7-~gfyCXw8QsG0jXT5wX4ECnni56fI~xALCxg2RJvC5a5Y82cPJ~f-Pjwibm9CLVvFiQJCjgSybVIuSufYF3XYaIpGW3WQX4gHCqCkTPEcl82h3MwFfGFQAA20HjOZjYKwjX26hvSB3a~Ux39Gz8yYSuTZWuMdxYERZYwIl94pY5GrwYaXCRa5yk9qHexH3oB2jud5LNMgq6Icu6OtqasWl3~d-er4qSrhRAbZ6K-AQOASJxFC0VX8OCNNoiyB4akwoSAUiDPCbNyDMDEKNs9MFtVpsdG~8UTJcMphti0S8ZfFxclYCvRxNRLueNElCPV5SmggHKPw9bQlg__"
               className="w-24 h-18 mb-2 " />
            <span className="text-center  font-semibold text-[16px] ">Fresh Fruits & Vegetables</span>
          </div>
      
          <div  className="w-44 h-48 bg-[#F8A44C] rounded-lg border border-1 flex flex-col items-center justify-center">
            <img src="https://s3-alpha-sig.figma.com/img/6bc8/dddf/f5d852ef29933852ca183be51838587e?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HIXAPsBidoNgnoGlu-GSvCCIyOootUaO9OMbXJ4Yy9DBJaTJ8LskNWBT5So0TpeLUA~umhREG~nIcbmauHjS0kGSqa2cxO~R4m-6mD782O8Oy1NsCyiEqzRj79LjvqCFlLkl8xSa2q5CCiPXJi~lvjM46D7c480ycQ-1Ud1utepAny4YuFE8TzR5KjI9Fwt~KewvT4AnWinyWVuolXzNx8VTOr5NG4W94bGGkJQoIfpWd0WuLuCmb~-mRjibIPNKwwQ75hpDBDZ6zT9KZ4aoa98~B5scq0I5ALAvARVOO5s9pTZMtl4wPfaxugEjvmie1oKwve4sduALv48aXwEF8A__"
               className="w-24 h-18 mb-2  rounded-md " />
            <span className="text-center w-[88px] h-[44px] font-semibold  text-sm">Cooking Oil & Ghee</span>
          </div>
      
          <div  className="w-44 h-48 bg-[#F7A593] rounded-lg flex flex-col items-center justify-center">
            <img src="https://s3-alpha-sig.figma.com/img/22d3/aac2/57974f1aad9e0ec045f5bfc22ef5a6ab?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fyb1wr8KmxrHV6SI-~oMqtrit6sgymT3zwP8h3pDmmAj1~~PEKhTCabAT~68K1P4TVQV1JM9a2wBYGropT93fs-PeauFRe1kcC30hSrWwe6yRbFZvFVg2NHQyF7P3154ngEqBmoN4zDN51ebiyDlDQPgKdTAfTVMuiZSTOh0tuqcXR9KItrFz-YMZz-LsBEp3CosYi4GdfhljQyL87K8qBIfz8PVHV~NoF0yFfJVmiS09LLRk9hJglKvQnNNrDT6mrRTcalnvz690SeX-M5e6QGq1d16nQNiWdMYijVIV1vmAwNjG9xnZtuen7ez1F0Gmwni4wZzmdi4pybRfqHLQA__"
               className="w-24 h-18 mb-2 " />
            <span className="text-center font-semibold w-[88px] h-[22px]  text-sm">Meat & Fish</span>
          </div>
      
          <div  className="w-44 h-48 bg-[#D3B0E0] rounded-lg flex flex-col items-center justify-center">
            <img src="https://s3-alpha-sig.figma.com/img/e2fa/ac00/a6029bf4a611c1016eaf4b8f75db6d65?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dItlrCqzrlkZa4Hq3yaCytiy4bXjyY1n1P37RL-iDsD8A~~MOvlomrrQm4mZVaoljh54-a4CIkvgT4zrBx2FoOR1Y8ILaPh00G9L3fSxPEAFc3Y19mvAfg7QYJ0azogEoX7a-4LMxTzzLDKxR3XNdQgVWMv04kEA54Kso0dbhJg6VdWD9T2DeNWkFErsFx03Bu4Cjmfoywi-0VwKo3UZ2dZfpjZX5Taz-hEL4GUFjX49Ohy3eUoa7Tkahd4r9OO~Yz7HiEg6uFTz1NsA1Ev8slrQcwdBZJlejeFhqqyzRsASlaVmtJStIT2UC9EZGLc3nksSDFHnYrIos3XnJ3npJQ__"
               className="w-24 h-18 mb-2 " />
            <span className="text-center  font-semibold w-[124px] h-[22px] text-sm">Bakery & Snacks</span>
          </div>
      
          <div  className="w-44 h-48 bg-[#FDE598] rounded-lg flex flex-col items-center justify-center">
            <img src="https://s3-alpha-sig.figma.com/img/94ca/9c0c/443493293986632d57e9fb6f1e3b963f?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LCgtwQcAaM9CB4-4q8NFWsbUhC~U9vOTztm7k2xUV3Ars63y8~pz9ZzR3koLqW1zWPouBlkJTeFMjYt4uBnY1ciRfE6Sby5myLKbLcQfNzL0R4tQBSbKzcxOKysRS-s2jhTja3AXkAbPxywtJTb6oru482kuYICXOZmQQR2Av3N6lxiGC21EFHU5YZTtZpYlJJfQtG-yeQD0Q3y91Kchd~BMJUYFXJ8eqe4z7A5rY3gNl9iotbQC6MIadVvtD5TiSatQh7JwtjDSm1XeCMaJ7WsL5xIa22G~Aq8pviUJeNKEsOWmfIUBuYeB9eI7jDDeGL-WOjJFAu-Locwk3yLXsQ__"
               className="w-24 h-18 mb-2 " />
            <span className="text-center  font-semibold w-[96px] h-[22px] text-sm">Dairy & Eggs</span>
          </div>
      
          <div  className="w-44 h-48 bg-[#B7DFF5] rounded-lg flex flex-col items-center justify-center">
            <img src="https://s3-alpha-sig.figma.com/img/cf75/9129/87c6a2d11af9c6213699a2c5c6e3fb48?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MKXhhPulS-taoDLK~w1mzKaAHIBldbbA--DGMfY-ucnj81jGaX6NliGzgLBXPayzTDdOUwOcaeXHfMqOp0jamnVzwDkcy1Rt0KmPKM1HtERZ9Wj0BiDOQxqkLysRHlJ3Y770mEwNIGwNjrkZ-i8MpJQMfaHe7OhYXNVrPNVpHkErhr5jAWYHx5VI-ZR~A09bFjMydPugEuT0C4FJHwA36ptbQ9toJZ1~VEbfodrssn~TGB46T2gSFgtM36x7hi-C-nLOOYbn4NGlrYarwYNaKzTjDo20-k5sTogCDbDpP92SKy7p6IdqnHMEVebbtZWW8VbCLhYnkGcXkUdUvjD1bw__"
               className="w-24 h-18 mb-2 " />
            <span className="text-center font-semibold w-[80px] h-[22px] text-sm">Beverages</span>
          </div>
    
      </div>
    );
  };
  
  export default Content;
  