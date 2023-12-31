import {Modal,View,Text,Button , StyleSheet} from "react-native"

const ModalDelete = ({item,visible,onModal,onDelete, onClose}) =>{

    return  <Modal
                visible={visible}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>¿esta seguro que quiere borrar?</Text>
                        <Text style={styles.modalText}>{item.desc}</Text>
                        <Button title="Confirmo" onPress={onDelete} />
                        {/* <Button title="Cerrar" onPress={()=> onModal(false)}/> */}
                        <Button title="Cerrar" onPress={onClose} />
                    </View>        
                </View>
            </Modal>
}
const styles = StyleSheet.create({
    modalContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
      },
      modalContent:{
        width:"80%",
        borderWidth:2,
        padding:10,
        gap:10
      },
      modalText:{
        textAlign:"center"
      }
})
export default ModalDelete