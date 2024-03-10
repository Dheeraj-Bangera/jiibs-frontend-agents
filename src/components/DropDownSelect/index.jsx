import React from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";

import { options } from "./options";

import Select from "react-dropdown-select";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      multi: true,
      disabled: false,
      loading: false,
      contentRenderer: false,
      dropdownRenderer: false,
      inputRenderer: false,
      itemRenderer: true,
      optionRenderer: false,
      noDataRenderer: false,
      selectValues: [],
      searchBy: "username",
      clearable: false,
      searchable: true,
      create: false,
      separator: false,
      forceOpen: false,
      handle: true,
      addPlaceholder: "+ click to add",
      labelField: "username",
      valueField: "email",
      color: "#E4E4E4",
      keepSelectedInList: true,
      closeOnSelect: false,
      dropdownPosition: "bottom",
      direction: "ltr",
      dropdownHeight: "300px",
    };
  }

  setValues = (selectValues) => this.setState({ selectValues });

  contentRenderer = ({ props, state }) => {
    return (
      <div>
        {state.values.length} of {props.options.length} Selected
      </div>
    );
  };

  noDataRenderer = () => {
    return (
      <p style={{ textAlign: "center" }}>
        <strong>Ooops!</strong> No data found
      </p>
    );
  };

  itemRenderer = ({ item, itemIndex, props, state, methods }) => (
    <div key={item[props.valueField]} onClick={() => methods.addItem(item)}>
      <div style={{ margin: "10px" }}>
        <input type="checkbox" checked={methods.isSelected(item)} />
        &nbsp;&nbsp;&nbsp;{item[props.labelField]}
      </div>
    </div>
  );

  dropdownRenderer = ({ props, state, methods }) => {
    const regexp = new RegExp(state.search, "i");

    return (
      <div>
        <SearchAndToggle color={this.state.color}>
          <Buttons>
            <div>Search and select:</div>
            {methods.areAllSelected() ? (
              <Button className="clear" onClick={methods.clearAll}>
                Clear all
              </Button>
            ) : (
              <Button onClick={methods.selectAll}>Select all</Button>
            )}
          </Buttons>
          <input
            type="text"
            value={state.search}
            onChange={methods.setSearch}
            placeholder="Type anything"
          />
        </SearchAndToggle>
        <Items>
          {props.options
            .filter((item) =>
              regexp.test(item[props.searchBy] || item[props.labelField])
            )
            .map((option) => {
              if (
                !this.state.keepSelectedInList &&
                methods.isSelected(option)
              ) {
                return null;
              }

              return (
                <Item
                  disabled={option.disabled}
                  key={option[props.valueField]}
                  onClick={
                    option.disabled ? null : () => methods.addItem(option)
                  }
                >
                  <input
                    type="checkbox"
                    onChange={() => methods.addItem(option)}
                    checked={state.values.indexOf(option) !== -1}
                  />
                  <ItemLabel>{option[props.labelField]}</ItemLabel>
                </Item>
              );
            })}
        </Items>
      </div>
    );
  };

  optionRenderer = ({ option, props, state, methods }) => (
    <React.Fragment>
      <div onClick={(event) => methods.removeItem(event, option, true)}>
        {option.label}
      </div>
    </React.Fragment>
  );

  inputRenderer = ({ props, state, methods }) => (
    <input
      tabIndex="1"
      className="react-dropdown-select-input"
      size={methods.getInputSize()}
      value={state.search}
      onClick={() => methods.dropDown("open")}
      onChange={methods.setSearch}
      placeholder="Type in"
    />
  );

  render() {
    return (
      <div className={this.props.className}>
        <div>
          {/* <p>
            <strong>react-dropdown-select</strong> demo |{" "}
            <a
              target="_blank"
              href="https://github.com/sanusart/react-dropdown-select"
            >
              GitHub
            </a>{" "}
            |{" "}
            <a
              target="_blank"
              href="https://sanusart.github.io/react-dropdown-select/"
            >
              Docs
            </a>
          </p> */}
          <div
            style={{
              maxWidth: "350px",
              margin: "0 auto",
            }}
          >
            <StyledSelect
              // handleKeyDownFn={({ event, state, props, methods, setState }) => {
              //   const { cursor } = state;
              //   const escape = event.key === 'Escape';
              //   const enter = event.key === 'Enter';
              //   const arrowUp = event.key === 'ArrowUp';
              //   const arrowDown = event.key === 'ArrowDown';
              //   const tab = event.key === 'Tab' && !event.shiftKey;
              //   const shiftTab = event.shiftKey && event.key === 'Tab';

              //   if ((arrowDown || tab) && cursor === null) {
              //     return setState({
              //       cursor: 0
              //     });
              //   }

              //   if (arrowUp || arrowDown || shiftTab || tab) {
              //     event.preventDefault();
              //   }

              //   if (escape) {
              //     this.dropDown('close');
              //   }

              //   if (enter) {
              //     const currentItem = methods.searchResults()[cursor];
              //     if (currentItem && !currentItem.disabled) {
              //       if (props.create && valueExistInSelected(state.search, state.values, props)) {
              //         return null;
              //       }

              //       methods.addItem(currentItem);
              //     }
              //   }}
              placeholder="Select"
              addPlaceholder={this.state.addPlaceholder}
              color={this.state.color}
              disabled={this.state.disabled}
              loading={this.state.loading}
              searchBy={this.state.searchBy}
              separator={this.state.separator}
              clearable={this.state.clearable}
              searchable={this.state.searchable}
              create={this.state.create}
              keepOpen={this.state.forceOpen}
              dropdownHandle={this.state.handle}
              dropdownHeight={this.state.dropdownHeight}
              direction={this.state.direction}
              multi={this.state.multi}
              values={[]}
              labelField={this.state.labelField}
              valueField={this.state.valueField}
              options={options}
              dropdownGap={5}
              keepSelectedInList={this.state.keepSelectedInList}
              onDropdownOpen={() => undefined}
              onDropdownClose={() => undefined}
              onClearAll={() => undefined}
              onSelectAll={() => undefined}
              onChange={(values) => this.setValues(values)}
              noDataLabel="No matches found"
              closeOnSelect={this.state.closeOnSelect}
              noDataRenderer={
                this.state.noDataRenderer
                  ? () => this.noDataRenderer()
                  : undefined
              }
              dropdownPosition={this.state.dropdownPosition}
              itemRenderer={
                this.state.itemRenderer
                  ? (item, itemIndex, props, state, methods) =>
                      this.itemRenderer(item, itemIndex, props, state, methods)
                  : undefined
              }
              inputRenderer={
                this.state.inputRenderer
                  ? (props, state, methods) =>
                      this.inputRenderer(props, state, methods)
                  : undefined
              }
              optionRenderer={
                this.state.optionRenderer
                  ? (option, props, state, methods) =>
                      this.optionRenderer(option, props, state, methods)
                  : undefined
              }
              contentRenderer={
                this.state.contentRenderer
                  ? (innerProps, innerState) =>
                      this.contentRenderer(innerProps, innerState)
                  : undefined
              }
              dropdownRenderer={
                this.state.dropdownRenderer
                  ? (innerProps, innerState, innerMethods) =>
                      this.dropdownRenderer(
                        innerProps,
                        innerState,
                        innerMethods
                      )
                  : undefined
              }
            />
          </div>
        </div>
        {/* <p>
          <input
            type="checkbox"
            checked={this.state.multi}
            onChange={() =>
              this.setState({
                multi: !this.state.multi,
              })
            }
          />{" "}
          Multi
          <br />
          <input
            type="checkbox"
            checked={this.state.disabled}
            onChange={() =>
              this.setState({
                disabled: !this.state.disabled,
              })
            }
          />{" "}
          Disabled
          <br />
          <input
            type="checkbox"
            checked={this.state.loading}
            onChange={() =>
              this.setState({
                loading: !this.state.loading,
              })
            }
          />{" "}
          Loading
          <br />
          <input
            type="checkbox"
            checked={this.state.clearable}
            onChange={() =>
              this.setState({
                clearable: !this.state.clearable,
              })
            }
          />{" "}
          Clearable
          <br />
          <input
            type="checkbox"
            checked={this.state.searchable}
            onChange={() =>
              this.setState({
                searchable: !this.state.searchable,
              })
            }
          />{" "}
          Searchable
          <br />
          <input
            type="checkbox"
            checked={this.state.create}
            onChange={() =>
              this.setState({
                create: !this.state.create,
              })
            }
          />{" "}
          Create new entries
          <br />
          <input
            type="checkbox"
            checked={this.state.separator}
            onChange={() =>
              this.setState({
                separator: !this.state.separator,
              })
            }
          />{" "}
          Separator
          <br />
          <input
            type="checkbox"
            checked={this.state.handle}
            onChange={() =>
              this.setState({
                handle: !this.state.handle,
              })
            }
          />{" "}
          Dropdown handle
          <br />
          <input
            type="checkbox"
            checked={this.state.forceOpen}
            onChange={() =>
              this.setState({
                forceOpen: !this.state.forceOpen,
              })
            }
          />{" "}
          Stay open
          <br />
          <input
            type="checkbox"
            checked={this.state.contentRenderer}
            onChange={() =>
              this.setState({
                contentRenderer: !this.state.contentRenderer,
              })
            }
          />{" "}
          Custom content renderer
          <br />
          <input
            type="checkbox"
            checked={this.state.dropdownRenderer}
            onChange={() =>
              this.setState({
                dropdownRenderer: !this.state.dropdownRenderer,
              })
            }
          />{" "}
          Custom dropdown renderer
          <br />
          <input
            type="checkbox"
            checked={this.state.itemRenderer}
            onChange={() =>
              this.setState({
                itemRenderer: !this.state.itemRenderer,
              })
            }
          />{" "}
          Custom dropdown item renderer
          <br />
          <input
            type="checkbox"
            checked={this.state.keepSelectedInList}
            onChange={() =>
              this.setState({
                keepSelectedInList: !this.state.keepSelectedInList,
              })
            }
          />{" "}
          Keep selected item in a list
          <br />
          <input
            type="checkbox"
            checked={this.state.closeOnSelect}
            onChange={() =>
              this.setState({
                closeOnSelect: !this.state.closeOnSelect,
              })
            }
          />{" "}
          Close dropdown on select/deselect
          <br />
          Custom color{" "}
          <input
            type="color"
            defaultValue={this.state.color}
            onChange={(event) =>
              this.setState({
                color: event.target.value,
              })
            }
          />
          <br />
          Dropdown position
          <StyledHtmlSelect
            defaultValue={this.state.dropdownPosition}
            onChange={(event) =>
              this.setState({ dropdownPosition: event.target.value })
            }
          >
            <option value="auto">auto</option>
            <option value="top">top</option>
            <option value="bottom">bottom</option>
          </StyledHtmlSelect>
          <br />
          Dropdown Height:{" "}
          <StyledInput
            type="text"
            checked={this.state.dropdownHeight}
            value={this.state.dropdownHeight}
            onChange={(event) =>
              this.setState({
                dropdownHeight: event.target.value,
              })
            }
          />
          <br />
          Dropdown direction
          <StyledHtmlSelect
            defaultValue={this.state.direction}
            onChange={(event) =>
              this.setState({ direction: event.target.value })
            }
          >
            <option value="auto">auto</option>
            <option value="rtl">right-to-left</option>
            <option value="ltr">left-to-right</option>
          </StyledHtmlSelect>
          <br />
          Add placeholder:{" "}
          <StyledInput
            type="text"
            checked={this.state.addPlaceholder}
            value={this.state.addPlaceholder}
            onChange={(event) =>
              this.setState({
                addPlaceholder: event.target.value,
              })
            }
          />
          <br />
          Search by field:{" "}
          <StyledHtmlSelect
            defaultValue={this.state.searchBy}
            onChange={(event) =>
              this.setState({ searchBy: event.target.value })
            }
          >
            {Object.keys(options[0]).map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </StyledHtmlSelect>
          <br />
          Label field:{" "}
          <StyledHtmlSelect
            defaultValue={this.state.labelField}
            onChange={(event) =>
              this.setState({
                labelField: event.target.value,
                searchBy: event.target.value,
              })
            }
          >
            {Object.keys(options[0]).map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </StyledHtmlSelect>
          <br />
          Value field:{" "}
          <StyledHtmlSelect
            defaultValue={this.state.valueField}
            onChange={(event) =>
              this.setState({ valueField: event.target.value })
            }
          >
            {Object.keys(options[0]).map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </StyledHtmlSelect>
        </p>

        <details>
          <summary>Options:</summary>
          <pre>{JSON.stringify(options, false, 2)}</pre>
        </details>

        <details>
          <summary>Selected values:</summary>
          <pre>{JSON.stringify(this.state.selectValues, false, 2)}</pre>
        </details> */}
      </div>
    );
  }
}

const StyledSelect = styled(Select)`
  ${({ dropdownRenderer }) =>
    dropdownRenderer &&
    `
		.react-dropdown-select-dropdown {
			overflow: initial;
		}
	`}
`;

const SearchAndToggle = styled.div`
  display: flex;
  flex-direction: column;

  input {
    margin: 10px 10px 0;
    line-height: 30px;
    padding: 0 20px;
    border: 1px solid #ccc;
    border-radius: 3px;
    :focus {
      outline: none;
      border: 1px solid ${({ color }) => color};
    }
  }
`;

const Items = styled.div`
  overflow: auto;
  min-height: 10px;
  max-height: 200px;
`;

const Item = styled.div`
  display: flex;
  margin: 10px;
  align-items: baseline;
  cursor: pointer;
  border-bottom: 1px dotted transparent;

  :hover {
    border-bottom: 1px dotted #ccc;
  }

  ${({ disabled }) =>
    disabled
      ? `
  	opacity: 0.5;
  	pointer-events: none;
  	cursor: not-allowed;
  `
      : ""}
`;

const ItemLabel = styled.div`
  margin: 5px 10px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;

  & div {
    margin: 10px 0 0 10px;
    font-weight: 600;
  }
`;

const Button = styled.button`
  background: none;
  border: 1px solid #555;
  color: #555;
  border-radius: 3px;
  margin: 10px 10px 0;
  padding: 3px 5px;
  font-size: 10px;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;

  &.clear {
    color: tomato;
    border: 1px solid tomato;
  }

  :hover {
    border: 1px solid deepskyblue;
    color: deepskyblue;
  }
`;

const StyledHtmlSelect = styled.select`
  padding: 0;
  margin: 0 0 0 10px;
  height: 23px !important;
  color: #0071dc;
  background: #fff;
  border: 1px solid #0071dc;
`;

const StyledInput = styled.input`
  margin: 0 0 0 10px;
  height: 23px !important;
  color: #0071dc;
  background: #fff;
  border: 1px solid #0071dc;
  border-radius: 3px;
  padding: 13px 10px;
  width: 70px;
`;

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
