import { IoMdClose } from "react-icons/io";
import styles from "./styles/modal.module.css";
import Icon from "../icon/icon";
import Button from "../button/Button";

export default function Modal({
	children,
	title = "",
	onClose = e => {
		e.preventDefault();
		e.stopPropagation();
	},
}) {
	return (
		<>
			<div className={styles.modalContainer} onClick={onClose}>
				<div
					onClick={e => {
						e.stopPropagation();
					}}>
					<div className={styles.modalHeader}>
						{title}
						<Icon onClick={onClose}>
							<IoMdClose />
						</Icon>
					</div>
					{children}
					<div>
						<Button onClick={onClose} btnText='OK' name={"closePopup"} btnType='btPrimary' />
					</div>
				</div>
			</div>
		</>
	);
}
