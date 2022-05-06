import React, { useState } from 'react';

import { View, Text } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';

function Menu1() {
    const [visible, setVisible] = useState(false);

    const hideMenu = () => setVisible(false);

    const showMenu = () => setVisible(true);

    return (
        <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <Menu
                visible={visible}
                anchor={<Text onPress={showMenu}>Show menu</Text>}
                onRequestClose={hideMenu}
            >
                <MenuItem onPress={hideMenu}>Doctor</MenuItem>
                <MenuItem onPress={hideMenu}>Patient</MenuItem>

                <MenuDivider />
            </Menu>
        </View>
    );
}
export default Menu1;