// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

/**
 * @title PromToken
 * @dev ERC20 token representing ownership shares in the platform
 * Grants holders rights to platform revenue, governance voting power, and potential value appreciation
 */
contract PromToken is ERC20, ERC20Burnable, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant CAP_TABLE_ROLE = keccak256("CAP_TABLE_ROLE");
    
    // Max supply of Prom tokens (100 million with 18 decimals)
    uint256 public constant MAX_SUPPLY = 100_000_000 * 10**18;
    
    // Initial minting distribution
    uint256 public constant INITIAL_USER_GRANT = 1 * 10**18; // 1 token per user
    
    // Current supply
    uint256 private _currentSupply;
    
    // Events
    event TokensMinted(address indexed to, uint256 amount, string category);
    event TokensBurned(address indexed from, uint256 amount);
    
    /**
     * @dev Constructor - sets up roles and mints initial supply to deployer
     */
    constructor() ERC20("Prom Token", "PROM") {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
        _grantRole(CAP_TABLE_ROLE, msg.sender);
        
        // Initial DAC treasury allocation (10% of max supply)
        _mint(msg.sender, MAX_SUPPLY / 10);
        _currentSupply = MAX_SUPPLY / 10;
    }
    
    /**
     * @dev Mint tokens to an address - only callable by MINTER_ROLE
     * @param to The address to mint tokens to
     * @param amount The amount of tokens to mint
     * @param category The category of mint ('worker', 'user', 'investor', 'treasury')
     */
    function mint(address to, uint256 amount, string memory category) public onlyRole(MINTER_ROLE) {
        require(_currentSupply + amount <= MAX_SUPPLY, "Exceeds max supply");
        
        _mint(to, amount);
        _currentSupply += amount;
        
        emit TokensMinted(to, amount, category);
    }
    
    /**
     * @dev Override burn function to update current supply
     * @param amount The amount of tokens to burn
     */
    function burn(uint256 amount) public override {
        super.burn(amount);
        _currentSupply -= amount;
        
        emit TokensBurned(msg.sender, amount);
    }
    
    /**
     * @dev Get the current supply of tokens
     * @return Current supply amount
     */
    function currentSupply() public view returns (uint256) {
        return _currentSupply;
    }
    
    /**
     * @dev Get the remaining supply that can be minted
     * @return Remaining supply amount
     */
    function remainingSupply() public view returns (uint256) {
        return MAX_SUPPLY - _currentSupply;
    }
}