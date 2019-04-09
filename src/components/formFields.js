import * as React from 'react';
import { Form, Input, Select } from 'antd';

const Option = Select.Option;

export const InputField = ({
    field, 
    form, 
    ...props
}) => {
    const errors = form.errors;
    const touched = form.touched;
    const onInputChange = ({ target: { value } }) => form.setFieldValue(field.name, value);
    const errorMessage = touched[field.name] && errors[field.name];
    return (
        <Form.Item
        style={props.hidden ? {display:'none'} : {display:'block'}}
        label={props.label}
            {...props.formitemlayout}
            help={errorMessage}
            validateStatus={errorMessage ? "error" : undefined}>
            <Input
                {...field}
                {...props}
                onChange={onInputChange}
            />
        </Form.Item>
    )
};

export const SelectField = ({
    field, 
    form,
    ...props
}) => {
    const errors = form.errors;
    const touched = form.touched;
    const onChange = value => form.setFieldValue(field.name, value);
    const onBlur = () => form.setFieldTouched(field.name, true);
    const errorMessage = touched[field.name] && errors[field.name];
    const children = [];
    props.data && props.data.map((item,i) => {
        children.push(<Option key={item.id}>{item.name}</Option>);
    });
    return (
        <Form.Item
        style={props.hidden ? {display:'none'} : {display:'block'}}
        label={props.label}
            {...props.formitemlayout}
            help={errorMessage}
            validateStatus={errorMessage ? "error" : undefined}>
            <Select
                {...field}
                {...props}
                onBlur={onBlur}
                onChange={onChange}
            >
            {children}
            </Select>
        </Form.Item>
    )
};