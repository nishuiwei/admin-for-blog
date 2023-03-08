import io from 'socket.io-client'
import { ref } from 'vue'

const SERVER: string = import.meta.env.VITE_SOCKET_URL
let socket: any = null
// let userId: string | null = null
export const connectWithScoketIOServer = (): void => {
	socket = io(SERVER)

	socket.on('connect', () => {
		console.log('socket 成功链接')
		console.log(socket.id)
	})

	socket.on('conn-init', (data: any) => {
		console.log(data)
	})

	socket.on('direct-message', (data: any) => {
		console.log(data)
		directMessageHandler(data)
	})
}

/**
 * @param identity
 */

export const sendMessage = (identity: any) => {
	const data = {
		...identity,
		// id: userId,
		socketId: socket.id
	}
	socket.emit('message', data)
}

export const createChat = (data: any) => {
	socket.emit('conn-init', data)
}

export const messageContent = ref([
	{
		message: 'Hey Hi Elena Damyanti…!',
		type: 'receiver',
		userId: '2',
		id: '1'
	},
	{
		message:
			'HThanks, all things went well. Just a little boaring at home. desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
		type: 'sender',
		userId: '1',
		id: '2'
	}
])

interface IMessage {
	message: string
	type: string
	userId: string
	id: string
}

const directMessageHandler = (data: IMessage) => {
	messageContent.value.push(data)
}
