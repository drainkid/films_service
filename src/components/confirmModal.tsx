import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@mui/material";

type Props = {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
};

const ConfirmModal = ({ open, onClose, onConfirm, title }: Props) => (
    <Dialog open={open} onClose={onClose}>
        <DialogTitle>Добавить в избранное</DialogTitle>
        <DialogContent>
            <Typography>Вы хотите добавить <b>{title}</b> в избранное?</Typography>
        </DialogContent>
        <DialogActions>
            <Button
                onClick={(e) => {
                    e.stopPropagation()
                    onClose()
                }}
            >
                Отмена
            </Button>
            <Button
                onClick={(e) => {
                    e.stopPropagation()
                    onConfirm();
                }}
                variant="contained"
                color="primary"
            >
                Добавить
            </Button>
        </DialogActions>
    </Dialog>
);

export default ConfirmModal;
