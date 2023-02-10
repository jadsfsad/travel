import styles from './HomeSection.module.css';
import Locate from './svg/Locate';

function HomeSection() {
  return (
    <div className="absolute top-1/3 flex flex-col w-full justify-center items-center">
      <h1 className={styles.kk}>Explore the world with a smile</h1>
      <h1 className={styles.ll}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor purus non enim praesent elementum facilisis leo,
      </h1>
      <div className="h-[68px] w-[780px] shadow-xl flex justify-between bg-white rounded-lg">
        <div className="flex itmes-center space-x-4">
          <Locate className="ml-6 mt-[25px]" />
          <button className={styles.bed}>City or Destination </button>
        </div>
        <section className="flex">
          {' '}
          <div className="bg-black w-[1px] h-[49px] my-[9px]"></div>
          <button className={`${styles.bed} p-4`}>Date of stay</button>
        </section>
        <section className="flex">
          <div className="bg-black w-[1px] h-[49px] my-[9px]"></div>
          <button className={`${styles.bed} p-4`}>Person</button>
        </section>
        <button className={styles.bud}>Find Trip Now </button>
      </div>
    </div>
  );
}
export default HomeSection;
