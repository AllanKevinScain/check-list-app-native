import { FontAwesome, MaterialIcons, Octicons } from "@expo/vector-icons";
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import { themas } from "../../global/themes";
import { ComponentProps, ElementType, useMemo } from "react";

type MaterialIconsType = ComponentProps<typeof MaterialIcons>;
type NameMaterialIconsType = Pick<MaterialIconsType, 'name'>;

type FontAwesomeType = ComponentProps<typeof FontAwesome>;
type NameFontAwesomeType = Pick<FontAwesomeType, 'name'>;

type OcticonsType = ComponentProps<typeof Octicons>;
type NameOcticonsType = Pick<OcticonsType, 'name'>;

type IconNameType = NameMaterialIconsType['name'] | NameFontAwesomeType['name'] | NameOcticonsType['name']

interface TextFieldProps extends TextInputProps {
    label?: string;
    IconLeft?: ElementType;
    iconLeftName?: IconNameType;
    IconRight?: ElementType;
    iconRightName?: IconNameType;
    iconPress?: () => void;
}

export function Textfield(props: TextFieldProps) {
    const {
        value = '', 
        onChangeText = () => null, 
        label, 
        IconLeft, 
        iconLeftName,
        IconRight,
        iconRightName,
        iconPress,
        ...restInputProps
    } = props;

    const paddingInputWithIcon = useMemo(() => {
        if (IconLeft && IconRight) return 0;
        if (IconLeft || IconRight) return 10;

        return 20;
    }, [])

    return (
        <>
            {label && <Text style={style.inputLabel}>{label}</Text>}
            <View style={[style.inputBox, { paddingLeft: paddingInputWithIcon }]}>
                {IconLeft && iconLeftName && (
                    <TouchableOpacity onPress={iconPress}>
                        <IconLeft name={iconLeftName} size={20} color={themas.colors.gray} />
                    </TouchableOpacity>
                )}
                <TextInput
                    style={style.input}
                    value={value}
                    onChangeText={onChangeText}
                    {...restInputProps}
                />
                {IconRight && iconRightName && (
                    <TouchableOpacity onPress={iconPress}>
                        <IconRight name={iconRightName} size={20} color={themas.colors.gray} />
                    </TouchableOpacity>
                )}
            </View>    
        </>
    )
}