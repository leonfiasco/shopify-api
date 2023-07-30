import styles from './style.module.scss';

const DropDown = () => {
	return (
		<div className={styles.dropDownWrap}>
			<select className={styles.sizeDropDown} placeholder={'select a size'}>
				<option value='S'>S</option>
				<option value='M'>M</option>
				<option value='L'>L</option>
				<option value='XL'>XL</option>
			</select>
			<select className={styles.quantityDropDown}>
				<option value='1'>1</option>
				<option value='2'>2</option>
				<option value='3'>3</option>
				<option value='4'>4</option>
			</select>
		</div>
	);
};

export default DropDown;
