import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName, btn }) {
    const [ playerName, setPlayerName ] = useState(initialName)
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick() {
        // 만약 상태를 이전 값에 기반하여 변경하는 경우
        // 이 상태 업데이트 함수로 새로운 함수를 보내야 함.
        // => 여기서 전달하는 이 함수를 리액트가 호출하여 자동적으로 현재 상태값을 가지게 되기 때문이다. = 즉 상태 변경 전의 값이 입력
        setIsEditing((editing) => !editing); // 가장 최신값 사용

        if (isEditing) {
            onChangeName(symbol, playerName);
        }

    }

    function handleChange(val) {
        setPlayerName(val);
    }


    return (
        <li className={ isActive ? 'active' : undefined } >
            <span className="player">
                {
                    isEditing ?
                    // defaultValue = 초기값 설정으로 이후 특정값으로 덮어쓰지 못하게 함.
                    <input type="text" value={playerName} onChange={(e) => handleChange(e.target.value)}required />
                    :
                    <span className="player-name">{playerName}</span>
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            {
                btn === 0 &&
                <button onClick={handleEditClick}>{ isEditing ? 'SAVE' : 'EDIT' }</button>
            }
        </li>
    )
}